import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowLeft, Plus, Download, Filter, Search, MoreVertical, Trash2, Edit2, TrendingUp, FileText, Calendar, Zap, Link, Unlink, MessageSquare, User, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ActivityRequest {
  id: string;
  teacher: string;
  subject: string;
  level?: string;
  activityType: string;
  description: string;
  date: string;
  status: 'approved' | 'pending' | 'rejected';
}

const INITIAL_DATA: ActivityRequest[] = [
  { id: '1', teacher: 'أ. بن علي', subject: 'علوم طبيعية', activityType: 'تجربة مخبرية', description: 'تجربة الانقسام المنصف للسنة الثالثة ثانوي', date: '2024-03-25', status: 'approved' },
  { id: '2', teacher: 'أ. قاسم', subject: 'فيزياء', level: '2 ثانوي', activityType: 'عرض توضيحي', description: 'عرض الطاقة الحركية باستخدام المحاكاة', date: '2024-03-26', status: 'pending' },
  { id: '3', teacher: 'أ. مريم', subject: 'كيمياء', activityType: 'عمل تطبيقي', description: 'معايرة حمض قوي بأساس قوي', date: '2024-03-27', status: 'rejected' },
];

export default function ActivityRequest() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<ActivityRequest[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRequests = requests.filter(req => 
    req.teacher.includes(searchTerm) || 
    req.subject.includes(searchTerm) || 
    req.description.includes(searchTerm)
  );

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-6 pb-24 rtl font-sans" dir="rtl">
      {/* Header */}
      <header className="relative flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-4">
        <div className="text-right space-y-3 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-2">
            <MessageSquare size={14} />
            طلبات الأنشطة
          </div>
          <h1 className="text-6xl font-black text-primary tracking-tighter font-serif">طلب نشاط</h1>
          <p className="text-on-surface/60 text-xl font-bold">تقديم ومتابعة طلبات الأنشطة البيداغوجية والتجارب المخبرية.</p>
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
            تقديم طلب جديد
          </button>
        </div>

        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </header>

      {/* Requests List */}
      <section className="bg-white rounded-[40px] border border-outline/10 shadow-2xl overflow-hidden">
        <div className="p-8 border-b border-outline/5 flex justify-between items-center bg-surface-container-low/30">
          <h2 className="text-2xl font-black text-primary">سجل الطلبات</h2>
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

        <div className="p-8 space-y-6">
          {filteredRequests.map((req, i) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[32px] bg-surface-container-low border border-outline/5 hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center",
                    req.status === 'approved' ? "bg-success/10 text-success" :
                    req.status === 'pending' ? "bg-warning/10 text-warning" :
                    "bg-error/10 text-error"
                  )}>
                    <FileText size={32} />
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-black text-primary uppercase tracking-widest">{req.subject}</span>
                      <span className="text-xs font-bold text-on-surface/40">•</span>
                      <span className="text-xs font-black text-secondary uppercase tracking-widest">{req.activityType}</span>
                    </div>
                    <h3 className="text-2xl font-black text-on-surface tracking-tight mb-2">{req.description}</h3>
                    <div className="flex items-center gap-4 text-xs font-bold text-on-surface/40">
                      <span className="flex items-center gap-1"><User size={14} /> {req.teacher}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {req.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 self-end md:self-center">
                  <div className={cn(
                    "px-6 py-3 rounded-full text-sm font-black flex items-center gap-2",
                    req.status === 'approved' ? "bg-success/10 text-success" :
                    req.status === 'pending' ? "bg-warning/10 text-warning" :
                    "bg-error/10 text-error"
                  )}>
                    {req.status === 'approved' ? <CheckCircle2 size={18} /> : 
                     req.status === 'pending' ? <Clock size={18} /> : 
                     <AlertCircle size={18} />}
                    {req.status === 'approved' ? 'تمت الموافقة' : 
                     req.status === 'pending' ? 'قيد المراجعة' : 
                     'مرفوض'}
                  </div>
                  
                  <button className="p-4 hover:bg-primary/10 text-primary rounded-2xl transition-all">
                    <MoreVertical size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
