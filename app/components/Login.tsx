'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';

interface LoginProps {
    onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'بحبك') {
            onLogin();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-black text-white p-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl text-center relative overflow-hidden"
            >
                {/* Background Heart Pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 rounded-full blur-3xl animate-pulse -z-10" />

                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-8 relative inline-block"
                >
                    <Heart className="w-24 h-24 text-red-500 fill-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                    <Lock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white/80" />
                </motion.div>

                <h2 className="text-3xl font-bold mb-2 font-arabic text-center">مفتاح قلبي 🗝️❤️</h2>
                <p className="text-red-200 mb-8 font-arabic text-sm opacity-80 text-center">عشان تدخلي، لازم تقولي الكلمة السحرية 😉</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter the password..."
                            className="w-full bg-black/20 border border-red-500/30 rounded-xl px-4 py-4 text-center text-xl placeholder-red-300/50 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all font-sans text-white placeholder:font-arabic"
                            dir="auto"
                        />
                    </div>

                    <AnimatePresence>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-red-400 font-bold font-arabic text-sm text-center"
                            >
                                غلط يا روحي.. حاولي تاني 🥺
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-red-500/30 transition-all text-lg font-sans"
                    >
                        Happy Valentine&apos;s Day <span className="text-red-400">Zozo</span> ❤️
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
