import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Plus, ArrowLeft, Download, Filter, Search, MoreVertical, Trash2, Edit2, FlaskConical, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

interface LabReservation {
  id: string;
  labName: string;
  day: string;
  time: string;
  teacher: string;
  subject: string;
  group: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

const LABS = ['مخبر العلوم 1', 'مخبر العلوم 2', 'مخبر الفيزياء 1', 'مخبر الفيزياء 2', 'مخبر الكيمياء'];
const DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

const INITIAL_DATA: LabReservation[] = [
  { id: '1', labName: 'مخبر العلوم 1', day: 'الأحد', time: '08:00 - 10:00', teacher: 'أ. بن علي', subject: 'علوم طبيعية', group: '3ع ت 1', status: 'confirmed' },
  { id: '2', labName: 'مخبر الفيزياء 1', day: 'الاثنين', time: '10:00 - 12:00', teacher: 'أ. قاسم', subject: 'فيزياء', group: '2ر 1', status: 'pending' },
  { id: '3', labName: 'مخبر الكيمياء', day: 'الثلاثاء', time: '13:00 - 15:00', teacher: 'أ. مريم', subject: 'كيمياء', group: '3ت ر', status: 'confirmed' },
];

export default function LabSchedule() {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState<LabReservation[]>(INITIAL_DATA);
  const [filterLab, setFilterLab] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReservations = reservations.filter(res => {
    const matchesLab = !filterLab || res.labName === filterLab;
    const matchesSearch = !searchTerm || 
      res.teacher.includes(searchTerm) || 
      res.subject.includes(searchTerm) || 
      res.group.includes(searchTerm);
    return matchesLab && matchesSearch;
  });

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-6 pb-24 rtl font-sans" dir="rtl">
      {/* Header */}
      <header className="relative flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-4">
        <div className="text-right space-y-3 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-2">
            <FlaskConical size={14} />
            تسيير المخابر
          </div>
          <h1 className="text-6xl font-black text-primary tracking-tighter font-serif">حصص المخبر</h1>
          <p className="text-on-surface/60 text-xl font-bold">تنظيم استغلال المخابر وحجز الحصص التطبيقية.</p>
        </div>
        
        <div className="flex items-center gap-4 relative z-10">
          <button 
            onClick={() => navigate('/pedagogical')}
            className="bg-white text-primary border border-outline/10 px-8 py-4 rounded-[32px] font-black flex items-center gap-3 shadow-xl hover:bg-primary/5 transition-all active:scale-95"
          >
            <ArrowLeft size={24} />
            العودة للفضاء البيداغوجي
          </button>
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-black flex items-center gap-3 shadow-2xl shadow-primary/30 hover:bg-primary-container transition-all active:scale-95">
            <Plus size={24} />
            حجز حصة مخبرية
          </button>
        </div>

        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </header>

      {/* Lab Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {LABS.map((lab, i) => (
          <motion.button
            key={lab}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setFilterLab(lab === filterLab ? '' : lab)}
            className={cn(
              "p-6 rounded-[32px] border transition-all text-right group relative overflow-hidden",
              filterLab === lab 
                ? "bg-primary text-on-primary border-primary shadow-xl shadow-primary/20" 
                : "bg-white text-on-surface border-outline/10 hover:border-primary/30"
            )}
          >
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors",
              filterLab === lab ? "bg-white/20" : "bg-primary/5 text-primary"
            )}>
              <FlaskConical size={24} />
            </div>
            <h3 className="font-black text-lg leading-tight">{lab}</h3>
            <p className={cn(
              "text-xs mt-2 font-bold",
              filterLab === lab ? "text-on-primary/60" : "text-on-surface/40"
            )}>
              {reservations.filter(r => r.labName === lab).length} حصص محجوزة
            </p>
          </motion.button>
        ))}
      </section>

      {/* Reservations Table */}
      <section className="bg-white rounded-[40px] border border-outline/10 shadow-2xl overflow-hidden">
        <div className="p-8 border-b border-outline/5 flex justify-between items-center bg-surface-container-low/30">
          <h2 className="text-2xl font-black text-primary">جدول الحجوزات</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface/40" size={18} />
              <input 
                type="text" 
                placeholder="بحث..." 
                className="bg-white border border-outline/10 rounded-xl pr-10 pl-4 py-2 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="p-6 font-black text-primary text-sm uppercase tracking-wider">المخبر</th>
                <th className="p-6 font-black text-primary text-sm uppercase tracking-wider">اليوم / الوقت</th>
                <th className="p-6 font-black text-primary text-sm uppercase tracking-wider">الأستاذ</th>
                <th className="p-6 font-black text-primary text-sm uppercase tracking-wider">المادة / الفوج</th>
                <th className="p-6 font-black text-primary text-sm uppercase tracking-wider">الحالة</th>
                <th className="p-6 font-black text-primary text-sm uppercase tracking-wider text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.map((res, i) => (
                <motion.tr 
                  key={res.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-outline/5 hover:bg-primary/5 transition-colors group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                        <MapPin size={20} />
                      </div>
                      <span className="font-black text-primary">{res.labName}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="font-black text-on-surface/80">{res.day}</span>
                      <span className="text-xs font-bold text-on-surface/40 flex items-center gap-1">
                        <Clock size={12} />
                        {res.time}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 font-bold">{res.teacher}</td>
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-on-surface/80">{res.subject}</span>
                      <span className="text-xs font-black text-secondary">{res.group}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black",
                      res.status === 'confirmed' ? "bg-success/10 text-success" :
                      res.status === 'pending' ? "bg-warning/10 text-warning" :
                      "bg-error/10 text-error"
                    )}>
                      {res.status === 'confirmed' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                      {res.status === 'confirmed' ? 'مؤكد' : res.status === 'pending' ? 'قيد الانتظار' : 'ملغى'}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-all">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 hover:bg-error/10 text-error rounded-lg transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
