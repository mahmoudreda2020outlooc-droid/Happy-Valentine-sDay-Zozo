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
        description: 'أول مرة عيني تيجي في عينك.. وعرفت وقتها إني مش هشوف غيرك.',
    },
    {
        date: '31/10/2025',
        title: 'وعد العمر',
        description: 'اليوم اللي لبسنا فيه الدبل، وعاهدت ربنا إني أشيلك في عيوني.',
    },
];

export default function Timeline() {
    return (
        <div className="py-20 px-4 max-w-5xl mx-auto relative z-10">
            <h2 className="text-5xl font-black text-center text-white mb-20 font-arabic drop-shadow-md">قصة حبنا</h2>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-400/50 rounded-full" />

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex items-center justify-between mb-20 w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''
                            }`}
                    >
                        <div className="w-5/12" />

                        <div className="z-20 bg-white rounded-full p-2 border-4 border-red-500 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                            <Heart className="w-8 h-8 text-red-600 fill-red-600" />
                        </div>

                        <div className={`w-5/12 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-colors ${index % 2 === 0 ? 'text-right' : 'text-left'
                            }`}>
                            <div className={`flex items-center gap-3 text-red-200 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                <span className="font-bold text-xl dir-ltr tracking-wider">{event.date}</span>
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3 font-arabic">{event.title}</h3>
                            <p className="text-red-50 font-medium text-lg leading-relaxed font-arabic">{event.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
