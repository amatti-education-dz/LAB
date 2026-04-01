import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Printer, ChevronLeft, Save, History, FileText, Loader2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, query, where, getDocs, serverTimestamp, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType, getUserCollection } from '../firebase';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { SCHOOL_DB } from '../data/schools';

interface ReportRow {
  id: number;
  teacher: string;
  time: string;
  class: string;
  activity: string;
  equipment: string;
  notes: string;
}

interface InstitutionSettings {
  directorate: string;
  school: string;
  address: string;
  jobTitle: string;
}

interface SavedReport {
  id: string;
  date: string;
  rows: Omit<ReportRow, 'id'>[];
  labNotes: string;
  supervisorNotes: string;
  directorNotes: string;
  createdBy: string;
  createdAt: any;
}

export default function DailyReport() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'new' | 'history'>('new');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [rows, setRows] = useState<ReportRow[]>([
    { id: 1, teacher: '', time: '', class: '', activity: '', equipment: '', notes: '' },
  ]);
  const [labNotes, setLabNotes] = useState('');
  const [supervisorNotes, setSupervisorNotes] = useState('');
  const [directorNotes, setDirectorNotes] = useState('');
  const [institution, setInstitution] = useState<InstitutionSettings | null>(null);
  const [history, setHistory] = useState<SavedReport[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      if (!auth.currentUser) return;
      
      setIsLoading(true);
      try {
        // Fetch Institution Settings
        const settingsRef = doc(db, 'settings', auth.currentUser.uid);
        const settingsSnap = await getDoc(settingsRef);
        if (settingsSnap.exists()) {
          const data = settingsSnap.data();
          
          let directorateName = data.directorate || '';
          let schoolName = data.school || '';

          // Resolve names if they are codes
          if (data.directorate && SCHOOL_DB[data.directorate]) {
            directorateName = SCHOOL_DB[data.directorate].name;
            
            if (data.commune && data.cycle && data.school) {
              const commune = SCHOOL_DB[data.directorate].communes[data.commune];
              if (commune) {
                const school = commune.cycles[data.cycle]?.find((s: any) => s.code === data.school);
                if (school) {
                  schoolName = `${data.cycle} ${school.name} - ${commune.name}`;
                }
              }
            }
          }

          setInstitution({
            directorate: directorateName,
            school: schoolName,
            address: data.address || '',
            jobTitle: data.jobTitle || 'ملحق مخبري'
          });
        }

        // Fetch Report for current date if exists
        await fetchReportForDate(date);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    if (activeTab === 'history' && auth.currentUser) {
      setIsLoadingHistory(true);
      const q = query(
        getUserCollection('daily_reports'),
        where('createdBy', '==', auth.currentUser.uid),
        orderBy('date', 'desc')
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const reports = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as SavedReport[];
        setHistory(reports);
        setIsLoadingHistory(false);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, 'daily_reports');
        setIsLoadingHistory(false);
      });

      return () => unsubscribe();
    }
  }, [activeTab]);

  const fetchReportForDate = async (selectedDate: string) => {
    if (!auth.currentUser) return;
    
    try {
      const reportsRef = getUserCollection('daily_reports');
      const q = query(
        reportsRef, 
        where('date', '==', selectedDate), 
        where('createdBy', '==', auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const reportData = querySnapshot.docs[0].data();
        setRows(reportData.rows || []);
        setLabNotes(reportData.labNotes || '');
        setSupervisorNotes(reportData.supervisorNotes || '');
        setDirectorNotes(reportData.directorNotes || '');
      } else {
        // Reset to empty rows if no report found for this date
        setRows([
          { id: 1, teacher: '', time: '', class: '', activity: '', equipment: '', notes: '' },
          { id: 2, teacher: '', time: '', class: '', activity: '', equipment: '', notes: '' },
          { id: 3, teacher: '', time: '', class: '', activity: '', equipment: '', notes: '' },
        ]);
        setLabNotes('');
        setSupervisorNotes('');
        setDirectorNotes('');
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, 'daily_reports');
    }
  };

  const handleDateChange = async (newDate: string) => {
    setDate(newDate);
    setIsLoading(true);
    await fetchReportForDate(newDate);
    setIsLoading(false);
  };

  const addRow = () => {
    const newId = rows.length > 0 ? Math.max(...rows.map(r => r.id)) + 1 : 1;
    setRows([...rows, { id: newId, teacher: '', time: '', class: '', activity: '', equipment: '', notes: '' }]);
  };

  const removeRow = (id: number) => {
    setRows(rows.filter(r => r.id !== id));
  };

  const updateRow = (id: number, field: keyof ReportRow, value: string) => {
    setRows(rows.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const handleSave = async () => {
    if (!auth.currentUser) return;
    setIsSaving(true);
    try {
      const reportId = `${auth.currentUser.uid}_${date}`;
      await setDoc(doc(getUserCollection('daily_reports'), reportId), {
        date,
        dayName: getDayName(date),
        rows,
        labNotes,
        supervisorNotes,
        directorNotes,
        createdBy: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }, { merge: true });
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'daily_reports');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePrint = () => {
    window.focus();
    window.print();
  };

  const loadReport = (report: SavedReport) => {
    setDate(report.date);
    setRows(report.rows.map((r, i) => ({ ...r, id: i + 1 })));
    setLabNotes(report.labNotes || '');
    setSupervisorNotes(report.supervisorNotes || '');
    setDirectorNotes(report.directorNotes || '');
    setActiveTab('new');
  };

  const getDayName = (dateString: string) => {
    const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const d = new Date(dateString);
    return days[d.getDay()];
  };

  return (
    <div className="min-h-screen bg-surface-container-low/30 p-4 md:p-12 rtl pb-24 font-sans" dir="rtl">
      {/* Navigation & Tabs */}
      <div className="max-w-5xl mx-auto mb-10 no-print flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-3 text-primary hover:bg-white rounded-full transition-all active:scale-95 shadow-sm"
          >
            <ChevronLeft size={24} className="rotate-180" />
          </button>
          <div className="bg-white p-1 rounded-2xl shadow-sm border border-outline/5 flex">
            <button
              onClick={() => setActiveTab('new')}
              className={cn(
                "px-6 py-2.5 rounded-xl text-sm font-black transition-all flex items-center gap-2",
                activeTab === 'new' ? "bg-primary text-on-primary shadow-lg" : "text-primary/60 hover:bg-primary/5"
              )}
            >
              <Plus size={18} />
              تقرير جديد
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={cn(
                "px-6 py-2.5 rounded-xl text-sm font-black transition-all flex items-center gap-2",
                activeTab === 'history' ? "bg-primary text-on-primary shadow-lg" : "text-primary/60 hover:bg-primary/5"
              )}
            >
              <History size={18} />
              الأرشيف اليومي
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleSave}
            disabled={isSaving || activeTab === 'history'}
            className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-full flex items-center gap-3 shadow-sm hover:border-primary/30 transition-all active:scale-95 font-black disabled:opacity-50"
          >
            {isSaving ? <Loader2 size={22} className="animate-spin" /> : <Save size={22} />}
            حفظ التقرير
          </button>
          <button 
            onClick={handlePrint}
            className="bg-primary text-on-primary px-10 py-4 rounded-full flex items-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 font-black"
          >
            <Printer size={22} />
            طباعة
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'new' ? (
          <motion.div 
            key="new-report"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-16 min-h-[29.7cm] border border-outline/5 font-serif print:shadow-none print:border-none print:p-0 relative overflow-hidden"
          >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[200px] -mr-20 -mt-20 print:hidden" />
        
            {/* Header */}
            <div className="relative z-10 flex justify-between items-start border-b-2 border-primary pb-6 mb-10">
              <div className="text-right text-[10px] font-black space-y-1.5 text-primary/80">
                <p>{institution?.directorate}</p>
                <p>{institution?.school}</p>
                <p>الرقم: <span className="border-b border-dotted border-primary px-4 inline-block min-w-[60px]"></span> / 2026</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-base font-black text-primary tracking-tight">الجمهورية الجزائرية الديمقراطية الشعبية</p>
                <p className="text-xs font-bold text-primary/70">وزارة التربية الوطنية</p>
              </div>
              <div className="text-left text-[10px] font-black space-y-1.5 text-primary/80">
                <p>السنة الدراسية: <span className="border-b border-dotted border-primary px-4">2026/2025</span></p>
              </div>
            </div>

            <h2 className="relative z-10 text-3xl font-black text-center mb-12 text-primary tracking-widest">التقريـر اليومي للمخبر</h2>

            {/* Date Info */}
            <div className="relative z-10 flex flex-wrap gap-10 mb-12 text-sm font-bold text-primary">
              <div className="flex items-center gap-4 bg-surface-container-low/30 px-6 py-3 rounded-2xl border border-outline/5">
                <label className="font-black opacity-40 uppercase tracking-widest text-[10px]">التاريخ:</label>
                <input 
                  className="bg-transparent outline-none text-center w-40 font-black border-b border-primary/20 focus:border-primary transition-all" 
                  type="date" 
                  value={date}
                  onChange={(e) => handleDateChange(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low/30 px-6 py-3 rounded-2xl border border-outline/5">
                <label className="font-black opacity-40 uppercase tracking-widest text-[10px]">الموافق ليوم:</label>
                <span className="font-black text-primary min-w-[80px] text-center">{getDayName(date)}</span>
              </div>
            </div>

        {/* Main Table */}
        <div className="relative z-10 overflow-x-auto">
          <table className="w-full border-collapse border-2 border-primary/20">
                <thead>
                  <tr className="bg-surface-container-low text-primary text-[11px] font-black uppercase tracking-widest">
                    <th className="border-2 border-primary/20 p-4 w-12">رقم</th>
                    <th className="border-2 border-primary/20 p-4 w-1/5">الأستاذ(ة)</th>
                    <th className="border-2 border-primary/20 p-4 w-32">التوقيت</th>
                    <th className="border-2 border-primary/20 p-4 w-32">القسم</th>
                    <th className="border-2 border-primary/20 p-4">النشاط التطبيقي</th>
                    <th className="border-2 border-primary/20 p-4 w-1/5">الأجهزة المستعملة</th>
                    <th className="border-2 border-primary/20 p-4 w-32">ملاحظات</th>
                    <th className="border-2 border-primary/20 p-4 w-12 no-print"></th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-primary/10">
                  {rows.map((row, index) => (
                    <tr key={row.id} className="hover:bg-primary/5 transition-colors group">
                      <td className="border-2 border-primary/20 p-4 text-center text-xs font-black text-primary/60">{index + 1}</td>
                      <td className="border-2 border-primary/20 p-2">
                        <input 
                          className="w-full border-none bg-transparent text-center text-xs font-bold outline-none focus:bg-surface-container-low/50 rounded-lg py-2 transition-all" 
                          type="text" 
                          value={row.teacher}
                          onChange={(e) => updateRow(row.id, 'teacher', e.target.value)}
                        />
                      </td>
                      <td className="border-2 border-primary/20 p-2">
                        <input 
                          className="w-full border-none bg-transparent text-center text-xs font-bold outline-none focus:bg-surface-container-low/50 rounded-lg py-2 transition-all" 
                          type="text" 
                          value={row.time}
                          onChange={(e) => updateRow(row.id, 'time', e.target.value)}
                        />
                      </td>
                      <td className="border-2 border-primary/20 p-2">
                        <input 
                          className="w-full border-none bg-transparent text-center text-xs font-bold outline-none focus:bg-surface-container-low/50 rounded-lg py-2 transition-all" 
                          type="text" 
                          value={row.class}
                          onChange={(e) => updateRow(row.id, 'class', e.target.value)}
                        />
                      </td>
                      <td className="border-2 border-primary/20 p-2">
                        <textarea 
                          className="w-full border-none bg-transparent text-right text-xs font-bold outline-none focus:bg-surface-container-low/50 rounded-lg py-2 px-3 transition-all resize-none" 
                          rows={2}
                          value={row.activity}
                          onChange={(e) => updateRow(row.id, 'activity', e.target.value)}
                        />
                      </td>
                      <td className="border-2 border-primary/20 p-2">
                        <textarea 
                          className="w-full border-none bg-transparent text-right text-xs font-bold outline-none focus:bg-surface-container-low/50 rounded-lg py-2 px-3 transition-all resize-none" 
                          rows={2}
                          value={row.equipment}
                          onChange={(e) => updateRow(row.id, 'equipment', e.target.value)}
                        />
                      </td>
                      <td className="border-2 border-primary/20 p-2">
                        <input 
                          className="w-full border-none bg-transparent text-center text-xs font-bold outline-none focus:bg-surface-container-low/50 rounded-lg py-2 transition-all" 
                          type="text" 
                          value={row.notes}
                          onChange={(e) => updateRow(row.id, 'notes', e.target.value)}
                        />
                      </td>
                      <td className="border-2 border-primary/20 p-2 text-center no-print">
                        <button 
                          onClick={() => removeRow(row.id)}
                          className="p-2 text-error/40 hover:text-error hover:bg-error/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button 
              onClick={addRow}
              className="relative z-10 mt-6 no-print flex items-center gap-2 text-primary font-black text-xs hover:bg-primary/5 px-6 py-3 rounded-xl transition-all border-2 border-dashed border-primary/20 hover:border-primary/40 w-full justify-center"
            >
              <Plus size={18} />
              إضافة سطر جديد للجدول
            </button>

            {/* Observations */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest">ملاحظات {institution?.jobTitle || 'ملحق مخبري'}:</label>
                <textarea 
                  className="w-full bg-surface-container-low/30 border-2 border-outline/5 rounded-[24px] p-6 text-sm font-bold outline-none focus:border-primary/20 transition-all min-h-[150px] resize-none"
                  placeholder="اكتب ملاحظاتك هنا..."
                  value={labNotes}
                  onChange={(e) => setLabNotes(e.target.value)}
                />
              </div>
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest">ملاحظات الناظر:</label>
                <textarea 
                  className="w-full bg-surface-container-low/30 border-2 border-outline/5 rounded-[24px] p-6 text-sm font-bold outline-none focus:border-primary/20 transition-all min-h-[150px] resize-none"
                  placeholder="ملاحظات الناظر..."
                  value={supervisorNotes}
                  onChange={(e) => setSupervisorNotes(e.target.value)}
                />
              </div>
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest">ملاحظات مدير المؤسسة:</label>
                <textarea 
                  className="w-full bg-surface-container-low/30 border-2 border-outline/5 rounded-[24px] p-6 text-sm font-bold outline-none focus:border-primary/20 transition-all min-h-[150px] resize-none"
                  placeholder="ملاحظات المدير..."
                  value={directorNotes}
                  onChange={(e) => setDirectorNotes(e.target.value)}
                />
              </div>
            </div>

            {/* Footer Signatures */}
            <div className="relative z-10 grid grid-cols-3 gap-8 mt-20 text-center">
              <div className="space-y-12">
                <p className="text-xs font-black text-primary underline underline-offset-4">توقيع {institution?.jobTitle || 'ملحق مخبري'}</p>
                <div className="h-20" />
              </div>
              <div className="space-y-12">
                <p className="text-xs font-black text-primary underline underline-offset-4">توقيع الناظر</p>
                <div className="h-20" />
              </div>
              <div className="space-y-12">
                <p className="text-xs font-black text-primary underline underline-offset-4">توقيع المدير</p>
                <div className="h-20" />
              </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center no-print">
              <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.2em]">الأرضية الرقمية — فضاء موظفوا المخابر</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="history-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto"
          >
            {isLoadingHistory ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Loader2 size={48} className="text-primary animate-spin" />
                <p className="text-primary font-black">جاري تحميل الأرشيف...</p>
              </div>
            ) : history.length === 0 ? (
              <div className="bg-white rounded-[40px] p-20 text-center border border-outline/5 shadow-xl">
                <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText size={40} className="text-primary/20" />
                </div>
                <h3 className="text-xl font-black text-primary mb-2">لا توجد تقارير مؤرشفة</h3>
                <p className="text-primary/40 font-bold">ابدأ بإنشاء تقريرك اليومي الأول وحفظه ليظهر هنا</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {history.map((report) => (
                  <motion.div
                    key={report.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[32px] p-6 border border-outline/5 shadow-lg hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
                    onClick={() => loadReport(report)}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-150" />
                    
                    <div className="relative z-10 flex justify-between items-start mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                        <FileText size={24} />
                      </div>
                      <span className="text-[10px] font-black text-primary/40 bg-surface-container-low px-3 py-1 rounded-full">
                        {report.createdAt?.toDate ? report.createdAt.toDate().toLocaleTimeString('ar-DZ') : ''}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-primary mb-1">تقرير يوم {getDayName(report.date)}</h4>
                    <p className="text-sm font-bold text-primary/60 mb-6">{report.date}</p>

                    <div className="flex items-center justify-between pt-6 border-t border-outline/5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">تم الحفظ</span>
                      </div>
                      <button className="text-primary font-black text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                        عرض وتعديل
                        <ChevronLeft size={14} className="rotate-180" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .p-4, .p-8, .p-12, .p-16, .p-20 { padding: 0 !important; }
          .max-w-5xl { max-width: none !important; margin: 0 !important; }
          .shadow-2xl, .shadow-xl, .shadow-lg, .shadow-sm { box-shadow: none !important; }
          .rounded-\\[40px\\], .rounded-3xl, .rounded-2xl, .rounded-xl { border-radius: 0 !important; }
          .border { border: none !important; }
          .min-h-screen { min-height: auto !important; padding: 0 !important; }
          textarea { height: auto !important; min-height: 50px; border: none !important; }
          input { border: none !important; }
          .bg-surface-container-low\\/30, .bg-primary\\/5 { background: transparent !important; }
        }
      `}</style>
    </div>
  );
}
