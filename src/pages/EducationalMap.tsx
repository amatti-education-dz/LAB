import React from 'react';
import { Map, Users, BookOpen, Calendar, History, Plus, FileText, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function EducationalMap() {
  const stats = [
    { label: 'إجمالي الأفواج', value: '32', icon: Users, color: 'bg-primary/10' },
    { label: 'مخابر مستغلة', value: '03', icon: Map, color: 'bg-primary/5' },
    { label: 'حصص أسبوعية', value: '142', icon: Calendar, color: 'bg-surface-container-low' },
    { label: 'معدل التغطية', value: '100%', icon: Sparkles, color: 'bg-secondary-container' },
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-6 pb-24 rtl font-sans" dir="rtl">
      {/* Header */}
      <header className="relative flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-4">
        <div className="text-right space-y-3 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-2">
            <Map size={14} />
            إدارة الخريطة التربوية
          </div>
          <h1 className="text-6xl font-black text-primary tracking-tighter font-serif">الخريطة التربوية</h1>
          <p className="text-on-surface/60 text-xl font-bold">توزيع الأفواج <span className="text-primary italic">والمستويات الدراسية</span> على المخابر وتعيين الأساتذة.</p>
        </div>
        
        <div className="flex items-center gap-4 relative z-10">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-black flex items-center gap-3 shadow-2xl shadow-primary/30 hover:bg-primary-container transition-all active:scale-95">
            <Plus size={24} />
            توزيع فوج جديد
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "p-8 rounded-[40px] border border-outline/5 transition-all group relative overflow-hidden shadow-xl",
              stat.color
            )}
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-br-[80px] -ml-6 -mt-6 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 flex justify-between items-start mb-6">
              <div className="p-4 bg-white rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <stat.icon size={24} />
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-xs text-on-surface/40 font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <span className="text-4xl font-black tracking-tighter group-hover:scale-110 transition-transform inline-block text-primary">{stat.value}</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Map Placeholder */}
      <section className="bg-white rounded-[40px] border border-outline/10 shadow-2xl overflow-hidden">
        <div className="p-10 border-b border-outline/5 flex justify-between items-center bg-surface-container-low/30">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            <h3 className="text-2xl font-black text-primary font-serif">توزيع المخابر الحالي</h3>
          </div>
          <button className="text-primary font-black text-sm hover:underline">تعديل التوزيع</button>
        </div>
        <div className="p-20 text-center space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { name: 'مخبر العلوم 1', level: 'ثانوي', teacher: 'أ. بن علي' },
              { name: 'مخبر الفيزياء 1', level: 'ثانوي', teacher: 'أ. قاسم' },
              { name: 'مخبر التقنية', level: 'متوسط', teacher: 'أ. سعيد' },
            ].map((lab, i) => (
              <div key={lab.name} className="p-8 rounded-[32px] bg-primary/5 border border-primary/10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mx-auto shadow-sm">
                  <Map size={24} />
                </div>
                <h5 className="text-lg font-black text-primary font-serif">{lab.name}</h5>
                <div className="text-xs font-bold text-on-surface/40 space-y-1">
                  <p>{lab.level}</p>
                  <p className="text-primary">{lab.teacher}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
