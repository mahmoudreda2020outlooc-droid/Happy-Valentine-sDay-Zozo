'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
    isPlaying: boolean;
}

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

export default function MusicPlayer({ isPlaying }: MusicPlayerProps) {
    const playerRef = useRef<any>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isApiReady, setIsApiReady] = useState(false);

    useEffect(() => {
        // Load YouTube IFrame API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                setIsApiReady(true);
            };
        } else {
            setIsApiReady(true);
        }
    }, []);

    useEffect(() => {
        if (isApiReady && !playerRef.current) {
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: '7ByqJOSpmO8',
                playerVars: {
                    'autoplay': 0,
                    'controls': 0,
                    'loop': 0, // Disable single video loop
                    'playlist': '7ByqJOSpmO8,h-2bHUUlDQk'
                },
                events: {
                    'onReady': (event: any) => {
                        if (isPlaying) {
                            event.target.playVideo();
                        }
                    },
                    'onStateChange': (event: any) => {
                        // When video ends (state 0), go to next video
                        if (event.data === 0) {
                            event.target.nextVideo();
                        }
                    }
                }
            });
        }
    }, [isApiReady]);

    useEffect(() => {
        if (playerRef.current && playerRef.current.playVideo) {
            if (isPlaying) {
                playerRef.current.playVideo();
            } else {
                playerRef.current.pauseVideo();
            }
        }
    }, [isPlaying]);

    const toggleMute = () => {
        if (playerRef.current) {
            if (isMuted) {
                playerRef.current.unMute();
            } else {
                playerRef.current.mute();
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <div id="youtube-player" className="hidden"></div>

            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="fixed bottom-8 right-8 z-[100]"
                    >
                        <button
                            onClick={toggleMute}
                            className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-full shadow-2xl hover:bg-white/30 transition-all group"
                        >
                            <div className="relative">
                                {isMuted ? (
                                    <VolumeX className="w-6 h-6 text-white" />
                                ) : (
                                    <Volume2 className="w-6 h-6 text-white animate-pulse" />
                                )}

                                {/* Music Wave Animation */}
                                {!isMuted && (
                                    <div className="absolute -top-1 -right-1 flex gap-0.5 justify-center items-end h-3">
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [4, 12, 4] }}
                                                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                                className="w-0.5 bg-red-400 rounded-full"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
