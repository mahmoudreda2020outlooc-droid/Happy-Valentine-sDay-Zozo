'use client';

import { motion } from 'framer-motion';

export default function PhotoGallery() {
    return (
        <section className="py-20 px-4 relative z-10 bg-black/10">
            <h2 className="text-4xl font-black text-center text-white mb-12 font-arabic drop-shadow-md">ذكرياتنا الحلوة</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white/50 border-2 border-dashed border-white/30 hover:bg-white/20 hover:border-white transition-all cursor-pointer group"
                    >
                        <p className="group-hover:text-white transition-colors">مكان للصورة {item}</p>
                    </motion.div>
                ))}
            </div>
            <p className="text-center text-red-200 mt-8 font-medium font-arabic">مستني الصور عشان أحطها هنا 😉</p>
        </section>
    );
}
