'use client';

import { motion } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';

interface TimelineEvent {
    date: string;
    title: string;
    description: string;
}

const events: TimelineEvent[] = [
    {
        date: '11/9/2024',
        title: 'نظرة غيرت كل حاجة',
        description: 'كان اول يوم نتكلم وبداية اننا نبقى صحاب لما قعدنا فى الاتوبيس وفضلنا نهزر قد اى كنت مبسوط ومبسوط برضو وانا بشرب حببتى💖',
    },
    {
        date: '31/10/2025',
        title: 'وعد العمر',
        description: 'اليوم الى لبسنا فى الدبل وبقينا لبعض اخيرا بعد كثير من الاسئلة وتفتكرى يزينب طب سؤال جة فى دماغى 😂 فى الاخر حبيبتى بقت خطبتى💖💖',
    },
];

export default function Timeline() {
    return (
        <div className="py-20 px-4 max-w-5xl mx-auto relative z-10">
            <h2 className="text-5xl font-black text-center text-white mb-20 font-arabic drop-shadow-md">تواريخ فى عقلى وقلبى</h2>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute right-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-red-400/50 rounded-full" />

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex items-center mb-16 w-full gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                            } flex-row-reverse`}
                    >
                        <div className="hidden md:block md:w-5/12" />

                        <div className="z-20 bg-white rounded-full p-2 border-4 border-red-500 shadow-[0_0_15px_rgba(255,255,255,0.4)] shrink-0">
                            <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-600 fill-red-600" />
                        </div>

                        <div className={`flex-1 md:w-5/12 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-colors ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                            } text-right`}>
                            <div className={`flex items-center gap-3 text-red-200 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                } justify-end`}>
                                <span className="font-bold text-lg md:text-xl dir-ltr tracking-wider">{event.date}</span>
                                <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-white mb-2 font-arabic">{event.title}</h3>
                            <p className="text-red-50 font-medium text-base md:text-lg leading-relaxed font-arabic">{event.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
