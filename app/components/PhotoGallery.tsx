'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
    '/images/user1.png',
    '/images/user2.jpg',
    '/images/user3.jpg',
    '/images/user4.png',
    '/images/user5.png',
    '/images/user6.jpg',
];

export default function PhotoGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-20 px-4 relative z-10 bg-black/10">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-black text-center text-white mb-20 font-arabic drop-shadow-lg"
            >
                ذكرياتنا الحلوة
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        onClick={() => setSelectedImage(src)}
                        className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-500/40 transition-all duration-500 border-4 border-white/10 cursor-pointer"
                    >
                        <Image
                            src={src}
                            alt={`Memories ${index + 1}`}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white font-arabic text-xl font-bold mb-1 text-right">أجمل لحظة معاكي ❤️</p>
                                <div className="w-12 h-1 bg-red-500 rounded-full ml-auto"></div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full backdrop-blur-md transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl h-full max-h-[85vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.3)] border-2 border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Selected Memory"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-red-100 mt-16 font-arabic text-2xl font-black drop-shadow-md animate-pulse"
            >
                كل صورة حكاية.. وكل حكاية انتِ فيها ❤️
            </motion.p>
        </section>
    );
}
