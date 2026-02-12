'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart } from 'lucide-react';

export default function Counter() {
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const startDate = new Date('2025-10-31T00:00:00');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            // Approximate months (30 days)
            const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({ months, days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-3 md:p-6 rounded-2xl md:rounded-3xl border border-white/20 min-w-[75px] sm:min-w-[100px] md:min-w-[140px] shadow-xl">
            <span className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-1 md:mb-2">{value}</span>
            <span className="text-red-200 font-bold text-[10px] sm:text-xs md:text-base uppercase tracking-wider md:tracking-widest font-arabic">{label}</span>
        </div>
    );

    return (
        <section className="py-24 px-4 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex justify-center items-center gap-4 mb-12">
                    <Heart className="w-8 h-8 text-red-400 fill-red-400" />
                    <h2 className="text-4xl md:text-6xl font-black text-white font-arabic drop-shadow-md">من يوم مـابقـينا لبعض</h2>
                    <Heart className="w-8 h-8 text-red-400 fill-red-400" />
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-8">
                    <TimeUnit value={timeLeft.months} label="شهر" />
                    <TimeUnit value={timeLeft.days} label="يوم" />
                    <TimeUnit value={timeLeft.hours} label="ساعة" />
                    <TimeUnit value={timeLeft.minutes} label="دقيقة" />
                    <TimeUnit value={timeLeft.seconds} label="ثانية" />
                </div>

                <p className="mt-12 text-2xl md:text-3xl font-bold text-red-100 font-arabic italic">
                    وكل ثانية بتعدي وإنتي هنا.. قلبي بيحبك أكتر ❤️
                </p>
            </motion.div>
        </section>
    );
}
