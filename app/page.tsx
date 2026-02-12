'use client';

import { useState } from 'react';
import { Cairo } from 'next/font/google';
import HeartAnimation from './components/HeartAnimation';
import Timeline from './components/Timeline';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import TypingMessage from './components/TypingMessage';
import Login from './components/Login';
import Counter from './components/Counter';
import MusicPlayer from './components/MusicPlayer';
import { Heart, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700', '900'] });

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const startExperience = () => {
    setIsStarted(true);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <main className={`min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-900 overflow-x-hidden ${cairo.className} text-right text-white`} dir="rtl">
      <MusicPlayer isPlaying={isStarted} />
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
            <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4 py-12 text-center">

              <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/15 w-full max-w-lg md:max-w-none">
                <div className="relative inline-block">
                  <Heart className="w-20 h-20 md:w-28 md:h-28 text-red-500 mx-auto mb-6 md:mb-8 animate-pulse fill-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                  <Sparkles className="absolute -top-2 -right-2 text-yellow-300 w-8 h-8 md:w-10 md:h-10 animate-spin-slow" />
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-lg leading-tight uppercase tracking-tight">
                  Happy Valentine&apos;s<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-red-100 italic">
                    Day <span className="text-red-500">Zozo</span>
                  </span>
                </h1>
                <p className="text-xl md:text-3xl text-red-100 font-bold mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                  يوم الفلانتين ده معمول عشانك انتي وبس ❤️
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startExperience}
                  className="mt-8 md:mt-10 px-8 py-3 md:px-12 md:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-xl md:text-2xl font-black text-white shadow-xl hover:shadow-white/20 transition-all flex items-center gap-3 mx-auto group"
                >
                  Start <Heart className="w-5 h-5 md:w-6 md:h-6 group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
                </motion.button>
              </div>

            </section>

            {isStarted && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <TypingMessage text={"يا اجمل حاجة حصلتلى فى الدنيا ❤️ من اول يوم شوفتك فية كنت حاسس انى ححبك ودة الى حصل حبيتك من كل قلبى 💝 كل عيد حب واحنا ديما سوا كل لحظة بقضيها معاكى بتبقى ذكرى فى قلبى مش بتتنسى الكلام مهما كان مش هيوصف حبى ليكى \n بـحبك ❤️❤️💖"} />

                {/* Timeline Section */}
                <Timeline />

                {/* Love Counter Section */}
                <Counter />

                {/* Gallery Section */}
                <PhotoGallery />

                {/* Message Section */}
                <LoveLetter />

                <footer className="py-10 text-center text-red-200/60 font-medium relative z-10">
                  Made with ❤️ for Zozo
                </footer>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
}
