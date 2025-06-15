"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"


gsap.registerPlugin(useGSAP)

export default function Home() {
    const mainContainer = useRef<HTMLDivElement>(null)
    const teaTitle = useRef<HTMLDivElement>(null)
    const teaCup = useRef<HTMLDivElement>(null)
    const steam = useRef<HTMLDivElement>(null)
    const teaLeaves = useRef<HTMLDivElement>(null)   
     const ceremony = useRef<HTMLDivElement>(null)
    const quote = useRef<HTMLDivElement>(null)
    
    useGSAP(() => {
        
        const tl = gsap.timeline();

        const elements = [teaTitle.current, teaCup.current, steam.current, teaLeaves.current, ceremony.current, quote.current].filter(Boolean);
        
        if (elements.length > 0) {
            gsap.set(elements, {
                opacity: 0,
                scale: 0.8,
            });
        }


        tl.to(teaTitle.current, {
            opacity: 1,
            scale: 1,
            duration: 1.8,
            ease: "back.out(1.4)",
        })


        .to(teaCup.current, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
        }, "-=0.7")


        .to(steam.current, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "sine.inOut",
        }, "-=0.8")


        .to(teaLeaves.current, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
        }, "-=0.5")


        .to(ceremony.current, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
        }, "-=0.3")

        .to(quote.current, {
            opacity: 1,
            scale: 1,
            duration: 1.3,
            ease: "power1.out",
        }, "-=0.2")        
        gsap.to(steam.current, {
            y: -35,
            opacity: 0.15,
            duration: 3,
            repeat: -1,
            ease: "sine.inOut",
        })

        gsap.to(teaCup.current, {
            y: -4,
            rotation: 1,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        })        


        gsap.to(teaLeaves.current, {
            y: -12,
            x: 3,
            rotation: 1.5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(teaTitle.current, {
            filter: "brightness(1.05)",
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
}, [])

return (        
        <div 
            ref={mainContainer}
            className="h-full w-full bg-gray-50 overflow-hidden relative flex flex-col items-center justify-center"
        >
            <div className={"absolute inset-0 flex items-center justify-center z-10"}>
                <span className="block p-4 text-9xl text-gray-200 filter blur-[2px] font-jetbrains-mono">イラジー</span>
            </div>

            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 via-white to-gray-100"></div>
            </div>

            <div 
                ref={teaTitle}
                className="text-center mb-16 z-20"
            >
                <h1 className="text-6xl md:text-9xl font-antonio text-gray-800 mb-4 tracking-widest">
                    Laznology
                </h1>
                <h2 className="text-lg md:text-3xl font-noto-serif-jp text-gray-600 tracking-[0.3em]">
                    !Dev, just people
                </h2>
                <div className="w-32 h-1 bg-gray-800 mx-auto mt-4"></div>
            </div>            


            <div 
                ref={steam}
                className="absolute"
                style={{ top: '45%' }}
            >
                {[0, 1, 2, 3].map((index) => (
                    <div 
                        key={index}
                        className="w-2 h-10 bg-gray-300 opacity-40 absolute"
                        style={{
                            left: `${index * 8 - 10}px`,
                            height: `${8 + index * 2}px`,
                            borderRadius: '50px',
                            filter: 'blur(1px)'
                        }}
                    ></div>
                ))}
            </div>

            <div 
                ref={teaLeaves}
                className="flex justify-center space-x-4 z-15 mt-6"
            >
                {[0, 1, 2, 3, 4, 5].map((index) => (
                    <div 
                        key={index}
                        className="w-3 h-7 bg-gray-800 transform"
                        style={{
                            borderRadius: '50% 10px 50% 10px',
                            transform: `rotate(${index * 15 - 40}deg)`,
                            opacity: 0.7 - (index * 0.08)
                        }}
                    ></div>
                ))}
            </div>                       
            
            <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
                <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}></div>
            </div>
            
        </div>
    )
}