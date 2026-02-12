'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeartAnimation() {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
      size: Math.random() * 2 + 1,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 0.5, 0], // Lower opacity for subtlety on dark background
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
          className="absolute text-white font-bold blur-[1px]" // White hearts
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`
          }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
}
