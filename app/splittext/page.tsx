"use client";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function SplitTextPage() {
    const text1 = useRef<HTMLDivElement>(null);
    const text2 = useRef<HTMLDivElement>(null);
    const text3 = useRef<HTMLDivElement>(null);
    const heroText = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hero text animation (langsung muncul tanpa scroll)
        if (heroText.current) {
            const heroSplit = SplitText.create(heroText.current, {
                type: "words, chars",
            });

            gsap.from(heroSplit.chars, {
                y: 100,
                autoAlpha: 0,
                stagger: 0.02,
                duration: 1,
                ease: "back.out(1.7)",
            });
        }

        // Text 1 - Words animation dengan ScrollTrigger
        if (text1.current) {
            const split1 = SplitText.create(text1.current, {
                type: "words",
            });

            gsap.from(split1.words, {
                y: 100,
                autoAlpha: 0,
                stagger: 0.1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: text1.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    markers: false,
                }
            });
        }

        // Text 2 - Characters animation dengan ScrollTrigger
        if (text2.current) {
            const split2 = SplitText.create(text2.current, {
                type: "chars",
            });

            gsap.from(split2.chars, {
                rotation: 360,
                scale: 0,
                autoAlpha: 0,
                stagger: 0.05,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: text2.current,
                    start: "top 70%",
                    end: "bottom 30%",
                    markers: false,
                }
            });
        }

        // Text 3 - Combined animation dengan ScrollTrigger dan scrub
        if (text3.current) {
            const split3 = SplitText.create(text3.current, {
                type: "words, chars",
            });

            // Timeline untuk animasi kompleks
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: text3.current,
                    start: "top 60%",
                    end: "bottom 40%",
                    scrub: 1,
                    markers: false,
                }
            });

            tl.from(split3.words, {
                y: 200,
                autoAlpha: 0,
                stagger: 0.1,
                duration: 2,
            })
            .from(split3.chars, {
                color: "#ff0000",
                stagger: 0.02,
                duration: 1,
            }, "-=1");
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section */}
            <div className="min-h-screen flex items-center justify-center px-8">
                <div className="text-center">
                    <div ref={heroText} className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 leading-tight">
                        SplitText ScrollTrigger
                    </div>
                    <p className="text-xl text-gray-400 mt-8">Scroll down to see animations</p>
                </div>
            </div>

            {/* Section 1 - Words Animation */}
            <div className="min-h-screen flex items-center justify-center px-8">
                <div className="text-center">
                    <div ref={text1} className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Words appear one by one when scrolled
                    </div>
                    <p className="text-gray-400 text-lg">Each word animates individually</p>
                </div>
            </div>

            {/* Section 2 - Characters Animation */}
            <div className="min-h-screen flex items-center justify-center px-8">
                <div className="text-center">
                    <div ref={text2} className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-8">
                        Characters rotate and scale in
                    </div>
                    <p className="text-gray-400 text-lg">Individual character animations with rotation</p>
                </div>
            </div>

            {/* Section 3 - Scrub Animation */}
            <div className="min-h-screen flex items-center justify-center px-8">
                <div className="text-center">
                    <div ref={text3} className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-8">
                        Scrub animation follows scroll progress
                    </div>
                    <p className="text-gray-400 text-lg">Animation tied to scroll position with color change</p>
                </div>
            </div>

            {/* Footer */}
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">End of Demo</h2>
                    <p className="text-gray-400">SplitText + ScrollTrigger = Amazing animations!</p>
                </div>
            </div>
        </div>
    )
}