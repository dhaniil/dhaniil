"use client"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { useRef} from "react"
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap/all"
import InfiniteScroll from "@/components/reactbits/InfiniteScroll/InfiniteScroll"
import TechStackItem from "@/components/tech-stack-items"
import Clock from "@/components/clock"
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function Home(){

const text1 = useRef<HTMLDivElement>(null)
const text2 = useRef<HTMLDivElement>(null)
const text3 = useRef<HTMLDivElement>(null)
const text4 = useRef<HTMLAnchorElement>(null)
const detail1 = useRef<HTMLDivElement>(null)
const handleMouseEnter = () => {
    const tlBlink = gsap.timeline()
    
    tlBlink
    .to(detail1.current, {
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 0.1,
        ease: "none",
        repeat: 3, 
        yoyo: true 
    })
    .to(detail1.current, {
        backgroundColor: "rgba(107, 114, 128, 0.1)", 
        color: "rgb(156, 163, 175)",
        duration: 0.1,
        ease: "power2.out"
    })
}
useGSAP(() => {
    gsap.fromTo(detail1.current,         
        {y:-100, opacity: 0},
        {y:0, opacity: 1, duration:1.5, ease:"power2.out"})
    gsap.set(detail1.current, {
        autoAlpha: 1
    })
    

    const tl = gsap.timeline()
    
    const split1 = SplitText.create(text1.current, { type: "chars" }) 
    const split2 = SplitText.create(text2.current, { type: "words" })
    const split3 = SplitText.create(text3.current, { type: "lines" }) 
    const split4 = SplitText.create(text4.current, { type: "chars" })

    tl.from(split1.chars, {
        y: 100,
        rotation: 45,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)"
    })
    .from(split2.words, {
        scale: 0,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
    }, "-=0.4")
    .from(split3.lines, {
        x: -200,
        autoAlpha: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out"
    }, "-=0.3")
    .from(split4.chars, {
        y: 50,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
})
const tech1 = [
  { content: <TechStackItem name="React" icon="logos:react" /> },
  { content: <TechStackItem name="Next.js" icon="logos:nextjs-icon" /> },
  { content: <TechStackItem name="TypeScript" icon="logos:typescript-icon" /> },
  { content: <TechStackItem name="JavaScript" icon="logos:javascript" /> },
  { content: <TechStackItem name="Node.js" icon="logos:nodejs-icon" /> },
  { content: <TechStackItem name="Tailwind CSS" icon="logos:tailwindcss-icon" /> },

];

const tech2 = [
  { content: <TechStackItem name="VS Code" icon="logos:visual-studio-code" /> },
    { content: <TechStackItem name="PhpStorm" icon="logos:phpstorm" /> },
  { content: <TechStackItem name="WebStorm" icon="logos:webstorm" /> },
    { content: <TechStackItem name="GSAP" icon="simple-icons:greensock" /> },
  { content: <TechStackItem name="Git" icon="logos:git-icon" /> },
  { content: <TechStackItem name="PHP" icon="logos:php" /> },
]

return (
    <div className="h-full w-full flex-col flex lg:flex-row gap-4 overflow-hidden relative">        {/* Desktop Ornaments */}
        <div className="hidden md:block fixed top-90 left-50 text-gray-400 -skew-7 bg-gray-500/10 p-1 rounded-lg">
            <span className="font-light text-xl">&lt; &gt; ~/$ git commit -m &quot;dev&quot; &lt; /&gt;</span>
        </div>
        <div onMouseEnter={handleMouseEnter} ref={detail1} className="hidden md:block fixed bottom-80 left-140 text-gray-400 -skew-y-6 bg-gray-500/10 p-1 rounded-lg">
            <span className="font-light text-xl">&lt; &gt; ~/$ npm run build &lt; /&gt;</span>
        </div>
        <div className="hidden md:block fixed top-15 left-10 text-zinc-700 -z-10">
            <span className="font-light text-9xl font-antonio">~$ ./init</span>
        </div>        {/* Mobile Ornaments */}
        <div className="block md:hidden fixed top-60 left-8 text-gray-400 -skew-7 bg-gray-500/10 p-1 rounded-lg text-xs">
            <span className="font-light">&lt; git commit -m &quot;dev&quot; &gt;</span>
        </div>
        <div className="block md:hidden fixed bottom-50 right-8 text-gray-400 skew-y-6 bg-gray-500/10 p-1 rounded-lg text-xs">
            <span className="font-light">&lt; npm run build &gt;</span>
        </div>
        <div className="block md:hidden fixed top-8 right-4 text-zinc-700 -z-10">
            <span className="font-light text-2xl font-antonio">~$ ./init</span>
        </div>

        <div className="hidden md:block">
            <Clock />
        </div>

        <div className="block md:hidden fixed bottom-20 left-4 text-gray-300">
            <span className="font-light text-8xl font-jetbrains">
                {new Date().getFullYear()}
            </span>
        </div>
        
        <div className="flex w-full items-center justify-center min-h-full px-4">
            <div className="relative flex flex-col w-auto text-center lg:text-left">
                <h2 ref={text1} className="line-clamp-2 text-2xl md:text-4xl text-antonio">Kodenee </h2>
                <h2 ref={text2} className="text-4xl md:text-7xl font-bold font-antonio">
                    Programinyaan 
                    <span className="font-bold text-lg md:text-xl block md:inline">ヾ(｡･ω･｡)</span>
                </h2> 
                <span ref={text3} className="font-base text-lg md:text-xl flex flex-col md:flex-row items-center gap-2 mt-4">
                    <span>Are you curious about my code?</span>
                    <div className="relative group">
                        <a ref={text4} href="/projects" className="relative z-10 group-hover:text-white transition-all duration-300 font-bold hover:scale-105">Click here</a>
                        <div className="absolute inset-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full inline-block"></div>
                    </div>
                </span>
                <div className="bg-gradient-to-r from-white/10 to-transparent absolute h-full w-full backdrop-blur-xs inset-0 top-0 left-0 md:left-10 -z-20"></div>
            </div>
        </div>        
        <div className="flex w-full items-center justify-center flex-col lg:flex-row gap-4 lg:gap-0 mt-8 lg:mt-0 pb-8 lg:pb-0">
            <InfiniteScroll
                width="16rem"
                maxHeight="300px"
                items={tech1}
                itemMinHeight={65}
                isTilted={false}
                tiltDirection="right"
                autoplay={true}
                autoplaySpeed={0.5}
                autoplayDirection="down"
                pauseOnHover={true}
                negativeMargin="-0.5em"
            />
            <InfiniteScroll
                width="16rem"
                maxHeight="300px"
                items={tech2}
                itemMinHeight={65}
                isTilted={false}
                tiltDirection="right"
                autoplay={true}
                autoplaySpeed={0.5}
                autoplayDirection="up"
                pauseOnHover={true}
                negativeMargin="-0.5em"
            />
        </div>
    </div>
)
}