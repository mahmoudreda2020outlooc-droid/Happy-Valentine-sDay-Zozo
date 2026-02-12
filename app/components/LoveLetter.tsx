'use client';

import { motion } from 'framer-motion';
import { Heart, Quote } from 'lucide-react';

export default function LoveLetter() {
    return (
        <section className="py-24 px-4 relative z-10 flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl w-full bg-white/95 backdrop-blur-xl px-8 py-16 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center"
            >

                <Quote className="absolute top-8 right-8 w-12 h-12 text-red-200 rotate-180" />
                <Quote className="absolute bottom-8 left-8 w-12 h-12 text-red-200" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-red-100 p-4 rounded-full mb-8 shadow-inner">
                        <Heart className="w-10 h-10 text-red-600 fill-red-600 animate-pulse" />
                    </div>

                    <h2 className="text-4xl font-black text-gray-900 mb-8 font-arabic">
                        إلى حبيبتي <span className="text-red-600">زينب</span>
                    </h2>

                    <div className="space-y-6 text-gray-800 text-xl md:text-2xl leading-loose font-arabic font-medium">
                        <p>
                            كل سنة وإنتي طيبة يا أغلى حاجة في حياتي. ❤️
                        </p>
                        <p>
                            من يوم 11/9/2024 وأنا بكتشف معنى جديد للحياة معاكي.
                            ويوم 31/10/2025 كان وعد مني ليكي قدام الدنيا كلها إني هكون سندك وضهرك.
                        </p>
                        <p>
                            بجد، وجودك في حياتي نعمة كبيرة أوي.
                            ربنا يديمك ليا يا "زوزو" يا قمر.
                        </p>
                        <p className="mt-8 text-3xl font-black text-red-600 transform -rotate-2">
                            بحبك ❤️
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
