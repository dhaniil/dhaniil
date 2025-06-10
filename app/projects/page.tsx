"use client"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import {ScrollTrigger} from "gsap/all"
import {useRef} from "react"
gsap.registerPlugin(ScrollTrigger)

export default function Projects(){
    const worksContainer = useRef<HTMLDivElement>(null)
      useGSAP(() => {
        gsap.set(worksContainer.current, { x: "100%" })

        gsap.to(worksContainer.current, {
            x: "0%",
            ease: "none",
            scrollTrigger: {
                trigger: ".landing-section",
                start: "top top",
                end: "+=1000vh",
                scrub: true,
                markers: true,
                scroller: ".scrollable-content",
                pin: true,
            }})
    }, [])

    return (
        <div className="h-screen w-full overflow-hidden relative">
            {/* Landing Section */}
            <section className="landing-section h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-6xl font-bold text-gray-800 mb-6">My Projects</h1>
                        <p className="text-xl text-gray-600 mb-8">Scroll down to explore my work</p>
                        <div className="animate-bounce">
                            <svg className="w-6 h-6 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Works Container - Sliding Panel */}
            <div className="min-h-[1000vh]"></div>
            <div 
                ref={worksContainer} 
                className="absolute top-0 left-0 w-full h-full bg-gray-900 z-10 overflow-y-auto"
            >
                <div className="min-h-full flex items-center justify-center p-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
