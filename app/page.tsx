"use client"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap/all"
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function Home(){
const container = useRef<HTMLDivElement>(null)
const ball = useRef<HTMLDivElement>(null)
const text = useRef<HTMLDivElement>(null)

useGSAP(() => {
    gsap.fromTo(
        container.current,
        {y:-100, opacity: 0},
        {y:0, opacity: 1, duration:1.5, ease:"power2.out"}
    )
    
    const split = SplitText.create(text.current, {
    type: "words"
    })

    gsap.from(split.words, {
            y: 100,
            autoAlpha: 0,
            stagger: 0.1,
    })
})

return (
    <div className="relative overflow-hidden">
        <div className="flex items-center justify-center h-full relative z-10">
            <div ref={text} className="text text-center ">
                Belajar animasi GSAP 
            </div>
        </div>
    </div>
)
}