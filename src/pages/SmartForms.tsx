import React from 'react';
import { BookOpen, FileText, CheckCircle, Clock, Plus, Search, Filter, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function SmartForms() {
  const stats = [
    { label: 'إجمالي القوالب', value: '24', icon: BookOpen, color: 'bg-primary/10' },
    { label: 'نماذج بانتظار التوقيع', value: '06', icon: Clock, color: 'bg-tertiary/10' },
    { label: 'نماذج مكتملة', value: '142', icon: CheckCircle, color: 'bg-primary/5' },
    { label: 'معدل الرقمنة', value: '84%', icon: Sparkles, color: 'bg-secondary-container' },
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-6 pb-24 rtl font-sans" dir="rtl">
      {/* Header */}
      <header className="relative flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-4">
        <div className="text-right space-y-3 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-2">
            <BookOpen size={14} />
            التحضير الذكي للنماذج
          </div>
          <h1 className="text-6xl font-black text-primary tracking-tighter font-serif">المكتبة الرقمية</h1>
          <p className="text-on-surface/60 text-xl font-bold">رقمنة المستندات <span className="text-primary italic">وتتبع حالة التوقيعات</span> والاعتمادات الرسمية.</p>
        </div>
        
        <div className="flex items-center gap-4 relative z-10">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-black flex items-center gap-3 shadow-2xl shadow-primary/30 hover:bg-primary-container transition-all active:scale-95">
            <Plus size={24} />
            إنشاء نموذج جديد
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

      {/* Templates Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'محضر جرد دوري', desc: 'نموذج رسمي لجرد الوسائل التعليمية والمخبرية.', type: 'PDF / Word' },
          { title: 'طلب صيانة عتاد', desc: 'نموذج لطلب تصليح أو معايرة الأجهزة الحساسة.', type: 'Digital Form' },
          { title: 'تقرير استهلاك كواشف', desc: 'تتبع المواد الكيميائية المستهلكة في الحصص.', type: 'Excel / CSV' },
        ].map((template, i) => (
          <motion.div
            key={template.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="bg-white p-10 rounded-[40px] border border-outline/5 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-[24px] bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <FileText size={32} />
            </div>
            <h4 className="text-2xl font-black text-primary mb-4 font-serif">{template.title}</h4>
            <p className="text-on-surface/60 font-bold mb-8 leading-relaxed">{template.desc}</p>
            <div className="flex justify-between items-center pt-6 border-t border-outline/5">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">{template.type}</span>
              <button className="text-primary font-black text-xs hover:underline">استخدام القالب</button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
