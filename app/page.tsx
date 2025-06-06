"use client"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap/all"
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function Home(){
const container = useRef<HTMLDivElement>(null)

const text1 = useRef<HTMLDivElement>(null)
const text2 = useRef<HTMLDivElement>(null)
const text3 = useRef<HTMLDivElement>(null)
const text4 = useRef<HTMLAnchorElement>(null)

useGSAP(() => {
    gsap.fromTo(
        container.current,
        {y:-100, opacity: 0},
        {y:0, opacity: 1, duration:1.5, ease:"power2.out"}
    )
    
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

return (
    <div className="h-full w-full flex-col flex md:flex-row gap-4 overflow-hidden">
        <div className="flex w-full items-center justify-center min-h-full">
            <div className="relative flex flex-col w-auto">
                <h2 ref={text1} className="line-clamp-2 text-4xl font-semibold">Kodenee </h2>
                <h2 ref={text2} className="text-4xl font-semibold">Programinyaan <span className="font-bold text-xl">ヾ(｡･ω･｡)</span></h2> 
                <span ref={text3} className="font-base text-xl flex items-center gap-2">
                    Are you curious about my code?
                    {/* <p>----</p> */}
                    <div className="relative group">
                        <a  ref={text4} href="/projects" className="relative z-10 group-hover:text-white transition-all duration-300 font-bold hover:scale-105 ">Click here</a>
                        <div className="absolute inset-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full inline-block"></div>
                    </div>
                </span>
                <div className="bg-gradient-to-r from-white/10 to-transparent absolute h-full w-full backdrop-blur-xs inset-0 top-0 left-10 -z-20"></div>
            </div>
        </div>
        <div className="flex border w-full items-center justify-center">
            Portofolio v2 under development ;-;
        </div>
    </div>
)
}