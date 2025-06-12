"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

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

        gsap.set([teaTitle.current, teaCup.current, steam.current, teaLeaves.current, ceremony.current, quote.current], {
            opacity: 0,
            scale: 0.8,
        });


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

            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 via-white to-gray-100"></div>
            </div>


            <div 
                ref={teaTitle}
                className="text-center mb-16 z-20"
            >
                <h1 className="text-8xl md:text-9xl font-yuji-hentaigana text-gray-800 mb-4 tracking-widest">
                    あの夢をなぞって
                </h1>
                <h2 className="text-2xl md:text-3xl font-noto-serif-jp text-gray-600 tracking-[0.3em]">
                    My Mind is empyt rn
                </h2>
                <div className="w-32 h-1 bg-gray-800 mx-auto mt-4"></div>
            </div>            


            <div 
                ref={steam}
                className="absolute z-15"
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
            </div>            {/* Ceremony Character with Classical Monochrome Style */}
            {/* <div 
                ref={ceremony}
                className="text-center mt-20 z-20"
            >
                <div className="text-6xl font-yuji-hentaigana text-gray-900 mb-4">一期一会</div>
                <div className="text-lg font-noto-serif-jp text-gray-600 tracking-[0.25em]">ICHIGO ICHIE</div>
            </div> */}

            {/* Quote with Philosophical Touch */}
            <div 
                ref={quote}
                className="absolute bottom-16 text-center z-20 px-4"
            >
                {/* <div className="text-xl font-noto-serif-jp text-gray-800 mb-2">
                    "心を込めた一杯の茶"
                </div> */}
                <div className="text-sm font-serif text-gray-500 tracking-wider">
                    A cup of coffe prepared highest inspiration :v
                </div>
            </div>            
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 writing-vertical-rl text-2xl font-noto-serif-jp text-gray-700 opacity-70 tracking-[0.5em] z-10">
                みちしるべ

            </div>
            <div className="absolute right-8 top-50 transform -translate-y-1/2 writing-vertical-rl text-lg font-noto-serif-jp text-gray-700 opacity-70 tracking-[0.5em] z-10">
                <p>Semua judul lagu buat test :D</p>

            </div>

            <div className="absolute top-4 left-4 w-10 h-10 border-l-4 border-t-4 border-gray-800 z-30 opacity-70"></div>
            <div className="absolute top-4 right-4 w-10 h-10 border-r-4 border-t-4 border-gray-800 z-30 opacity-70"></div>
            <div className="absolute bottom-4 left-4 w-10 h-10 border-l-4 border-b-4 border-gray-800 z-30 opacity-70"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border-r-4 border-b-4 border-gray-800 z-30 opacity-70"></div>
            
            <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
                <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}></div>
            </div>
            

            <div className="absolute left-10 bottom-20 z-10">
                <div className="transform  opacity-30">
                    <p className="font-yuji-hentaigana text-6xl text-gray-800 tracking-wide">
                        イレイジー
                    </p>
                    <p>ilazer</p>
                </div>
            </div>
            

            <div className="absolute inset-0 z-5 opacity-5 mix-blend-overlay pointer-events-none">
                <div className="w-full h-full bg-noise-pattern">Test</div>
            </div>
        </div>
    )
}
