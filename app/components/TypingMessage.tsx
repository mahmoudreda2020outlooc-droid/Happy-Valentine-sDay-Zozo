import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface TypingMessageProps {
    text: string;
}

export default function TypingMessage({ text }: TypingMessageProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (isInView) {
            let currentIndex = 0;
            const timer = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayedText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(timer);
                }
            }, 40); // Slightly faster
            return () => clearInterval(timer);
        }
    }, [isInView, text]);

    const highlightKeywords = (text: string) => {
        const keywords = ["بحبك", "زوزو"];
        let parts: (string | React.ReactNode)[] = [text];

        keywords.forEach(keyword => {
            let newParts: (string | React.ReactNode)[] = [];
            parts.forEach(part => {
                if (typeof part === 'string') {
                    const regex = new RegExp(`(${keyword})`, 'g');
                    const split = part.split(regex);
                    split.forEach((s, i) => {
                        if (s === keyword) {
                            newParts.push(<span key={`${keyword}-${i}`} className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">{s}</span>);
                        } else if (s !== "") {
                            newParts.push(s);
                        }
                    });
                } else {
                    newParts.push(part);
                }
            });
            parts = newParts;
        });
        return parts;
    };

    return (
        <section ref={ref} className="py-20 px-6 relative z-10 flex justify-center items-center min-h-[300px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 shadow-xl"
            >
                <div className="text-3xl md:text-5xl font-bold text-center text-white font-arabic leading-loose min-h-[1.5em] whitespace-pre-wrap">
                    <span>{highlightKeywords(displayedText)}</span>
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-1.5 h-10 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] ml-2 align-middle"
                    />
                </div>
            </motion.div>
        </section>
    );
}
