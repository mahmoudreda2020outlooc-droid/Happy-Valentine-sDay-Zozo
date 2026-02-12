'use client';

import { useState } from 'react';
import { Cairo } from 'next/font/google';
import HeartAnimation from './components/HeartAnimation';
import Timeline from './components/Timeline';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import Login from './components/Login';
import { Heart, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700', '900'] });

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <main className={`min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-900 overflow-x-hidden ${cairo.className} text-right text-white`} dir="rtl">
      <HeartAnimation />

      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center relative z-10 px-4 text-center">

              <div className="bg-white/10 backdrop-blur-md p-12 rounded-[3rem] border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/15">
                <div className="relative inline-block">
                  <Heart className="w-28 h-28 text-white mx-auto mb-8 animate-pulse fill-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  <Sparkles className="absolute -top-2 -right-2 text-yellow-300 w-10 h-10 animate-spin-slow" />
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-lg leading-tight uppercase tracking-tight">
                  Happy Valentine&apos;s<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-red-200">
                    Day Zainab
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-red-100 font-bold mt-6 max-w-2xl mx-auto leading-relaxed">
                  يوم الفلانتين ده معمول عشانك انتي وبس ❤️
                </p>
              </div>

              <div className="absolute bottom-10 animate-bounce flex flex-col items-center">
                <p className="text-red-200 text-sm mb-2 font-bold">شوفي الباقي</p>
                <div className="w-6 h-10 border-2 border-red-200 rounded-full mx-auto flex justify-center">
                  <div className="w-1 h-2 bg-white rounded-full mt-2" />
                </div>
              </div>
            </section>

            {/* Timeline Section */}
            <Timeline />

            {/* Gallery Section */}
            <PhotoGallery />

            {/* Message Section */}
            <LoveLetter />

            <footer className="py-10 text-center text-red-200/60 font-medium relative z-10">
              Made with ❤️ for Zainab
            </footer>
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
}
