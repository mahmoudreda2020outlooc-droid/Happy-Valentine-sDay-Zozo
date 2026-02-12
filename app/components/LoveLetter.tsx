'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function LoveLetter() {
    return (
        <section className="py-24 px-4 relative z-10 flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl w-full bg-white/95 backdrop-blur-xl px-8 py-16 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center"
            >

                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-red-100 p-4 rounded-full mb-8 shadow-inner">
                        <Heart className="w-10 h-10 text-red-600 fill-red-600 animate-pulse" />
                    </div>

                    <h2 className="text-4xl font-black text-gray-900 mb-8 font-arabic">
                        حببتي <span className="text-red-600">زوزو</span>
                    </h2>

                    <div className="space-y-6 text-gray-800 text-xl md:text-2xl leading-loose font-arabic font-medium">
                        <p>
                            كل عيد حب وانتى معايا ❤️
                        </p>
                        <p>
                            مهما هقولك بحبك ازاى مش هوفيكى بحقك
                        </p>
                        <p>
                            بجد وجودك في حياتي نعمة كبيرة أوي
                            ربنا يديمك ليا يا زوزو يا قمر
                        </p>
                        <p className="mt-8 text-3xl font-black text-red-600 transform -rotate-2">
                            <span className="text-red-600">بحبك</span> ❤️
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
