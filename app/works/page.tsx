"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import {useRef} from "react";
gsap.registerPlugin(ScrollTrigger);
const project = [
    {
        title: "Test1", description: "Tets Project"
    },
    {
        title: "Test2", description: "Tets Project"
    },
    {
        title: "Test3", description: "Tets Project"
    },
]


export default function WorksPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    const uji = useRef<HTMLDivElement>(null);
    const projectList = useRef<HTMLDivElement[]>([])

    useGSAP(() => {
        gsap.set(containerRef.current, {
            x: "100%", 
        })
        project.forEach((_, index) => {
            if (projectList.current[index]) {
            gsap.set(projectList.current[index], {
                opacity: 0,
            })
            }
        })

        gsap.to(containerRef.current, {
            x: 0, 
            scrollTrigger: {
                trigger: mainRef.current,
                scroller: ".scrollable-content",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onUpdate: (self) => {
                    console.log("Progress:", self.progress); // 0 to 1
                    
                    // Animasi project berdasarkan progress
                    if (self.progress > 1) {
                        project.forEach((_, index) => {
                            if (projectList.current[index]) {
                                gsap.to(projectList.current[index], {
                                    opacity: 1,
                                    duration: 0.3
                                });
                            }
                        });
                    }
                }
            }        
        })
        
        gsap.to(uji.current, {
            x: 200,
            rotation: 360,
            scrollTrigger: {
                trigger: uji.current,
                scroller: ".scrollable-content",
                start: "center center",
                end: "bottom bottom",
                scrub: 1,
                toggleActions: "play none none reverse"
            }
        })
    });

    return (
        <div  className="relative min-h-screen overflowx-x-hidden">

            <div ref={mainRef} className="h-[600vh] flex justify-start items-start">
                <h1 className="fixed top-1/2 right-1/2 font-bold text-6xl ">See my works</h1>
                <div ref={uji} className="h-12 w-12 aspect-square bg-cyan-300">
                </div>
            </div>            
            <div ref={containerRef} className="absolute inset-0 bg-black translate-x-full z-50">
                <div className="h-full overflow-y-auto p-4">
                    <div  className="relative grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                        {project.map((project, index) => (
                            <div ref={(e) => { if (e) projectList.current[index] = e }} key={index} className="absolute bottom-0 rounded-md bg-white/10 p-6">
                                <h2 className="text-white font-bold text-2xl mb-2">{project.title}</h2>
                                <p className="text-white/70">{project.description}</p>
                            </div>
                        ))}
                    </div>                                    
                </div>
            </div>
        </div>
    )
}