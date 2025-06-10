"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger, SplitText } from "gsap/all"
import BgTechStack from "@/components/bg-tech-stack"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function Home() {
    const text1 = useRef<HTMLHeadingElement>(null)
    const text2 = useRef<HTMLHeadingElement>(null)
    const text3 = useRef<HTMLParagraphElement>(null)
    const text4 = useRef<HTMLAnchorElement>(null)
    const detail1 = useRef<HTMLDivElement>(null)
    const catEmoji = useRef<HTMLDivElement>(null)
    const cat = useRef<HTMLSpanElement>(null)

    const handleMouseEnter = () => {
        const tlBlink = gsap.timeline()
        tlBlink
            .to(detail1.current, {
                backgroundColor: "#000",
                color: "#fff",
                duration: 0.1,
                repeat: 3,
                yoyo: true,
            })
            .to(detail1.current, {
                backgroundColor: "rgba(107,114,128,0.1)",
                color: "rgb(156,163,175)",
                duration: 0.2,
                ease: "power2.out",
            })
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#section-1',
                start: 'top 80%',
            }
        })

        const split1 = SplitText.create(text1.current, { type: 'chars' })
        const split2 = SplitText.create(text2.current, { type: 'words' })

        tl.from(split1.chars, {
            y: 50,
            autoAlpha: 0,
            stagger: 0.04,
            duration: 0.6,
            ease: 'back.out(1.5)',
        })
            .from(split2.words, {
                scale: 0,
                autoAlpha: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: 'elastic.out(1, 0.3)',
            }, '-=0.3')
            .from(text3.current, {
                y: 30,
                autoAlpha: 0,
                duration: 0.6,
                ease: 'power2.out',
            }, '-=0.4')
            .from(text4.current, {
                scale: 0,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'back.out(1.7)',
            }, '-=0.3')

        gsap.from(catEmoji.current, {
            scale: 0.8,
            autoAlpha: 0,
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: 'sine.inOut',
            delay: 1.5,
        })

        gsap.to(cat, {
            y: -10,
            rotation: 5,
            duration: 0.8,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        });
    })

    return (
        <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden relative">
            {/* Fixed Cat Emoji */}
            <div ref={catEmoji} className="fixed bottom-10 right-10 text-gray-300 z-20">
                <span className="font-jetbrains text-7xl">ฅ^•ﻌ•^ฅ</span>
            </div>
            {/* Desktop Ornaments */}
            <div className="hidden md:block fixed top-90 left-50 text-gray-400 -skew-7 bg-gray-500/10 p-1 rounded-lg">
                <span className="font-light text-xl">&lt; &gt; ~/$ git commit -m &quot;dev&quot; &lt; /&gt;</span>
            </div>
            <div onMouseEnter={handleMouseEnter} ref={detail1} className="hidden md:block fixed bottom-80 left-140 text-gray-400 -skew-y-6 bg-gray-500/10 p-1 rounded-lg">
                <span className="font-light text-xl">&lt; &gt; ~/$ npm run build &lt; /&gt;</span>
            </div>
            <div className="hidden md:block fixed bottom-15 left-10 text-zinc-700 -z-10">
                <span className="font-light text-9xl font-antonio">~$ ./git init</span>
            </div>
            {/* Mobile Ornaments */}
            <div className="block md:hidden fixed top-60 left-8 text-gray-400 -skew-7 bg-gray-500/10 p-1 rounded-lg text-xs">
                <span className="font-light">&lt; git commit -m &quot;dev&quot; &gt;</span>
            </div>
            <div className="block md:hidden fixed bottom-50 right-8 text-gray-400 skew-y-6 bg-gray-500/10 p-1 rounded-lg text-xs">
                <span className="font-light">&lt; npm run build &gt;</span>
            </div>
            <div className="block md:hidden fixed top-8 right-4 text-zinc-700 -z-10">
                <span className="font-light text-2xl font-antonio">~$ ./init</span>
            </div>

            <div className="block md:hidden fixed bottom-20 left-4 text-gray-300">
            <span className="font-light text-8xl font-jetbrains">
                {new Date().getFullYear()}
            </span>
            </div>

            {/* Section 1: Hero */}
            <div id="section-1" className="flex w-full items-center justify-center min-h-screen px-6 lg:px-12">
                <div className="relative flex flex-col text-center lg:text-left">
                    <h1 ref={text1} className="font-antonio uppercase text-5xl md:text-7xl lg:text-9xl tracking-tight">
                        Kodenee
                    </h1>
                    <h2 ref={text2} className="font-flaj mt-4 text-3xl md:text-5xl lg:text-6xl tracking-wide">
                        Programinyaan
                        <span ref={cat} className="block md:inline font-antonio text-xl md:text-2xl">ヾ(｡･ω･｡)</span>
                    </h2>
                    <p ref={text3} className="font-fjalla tracking-wide text-neutral-500 uppercase text-base md:text-xl flex flex-col md:flex-row items-center gap-2 mt-4">
                        Are you curious about my code?{' '}
                        <a ref={text4} href="/projects" className="font-antonio font-bold hover:scale-105 transition-transform">
                            Click here
                        </a>
                    </p>
                </div>
            </div>

            {/* Section 2: Tech Stack */}
            <div id="section-2" className="relative flex w-full h-screen items-center justify-center bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm">
                <BgTechStack />
            </div>
        </div>
    )
}
