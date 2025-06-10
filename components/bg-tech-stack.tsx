"use client"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import TechStackItem from "./tech-stack-items"
import {useRef} from "react";


export default function BgTechStack(){
    const container1 = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if(container1.current){
            const childern = container1.current.children
            gsap.fromTo(childern, {
                autoAlpha: 0,
                scale: 0,
                rotation: 0,
            }, {
                scale: 1,
                autoAlpha: 1,
                rotation: 360,
                stagger: 0.2,
                delay: 0.5,
                ease: "elastic.out(1, 0,3)"
            })

            gsap.to(childern, {
                y: 10,
                yoyo: true,
                stagger: 1,
                ease: "sine.inOut",
                repeat: -1,
                duration: 2
            })
        }
    })
    return (
        <div className="relative w-full h-full min-h-screen">
            {/*bg grid*/}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-500"/>
                </svg>
            </div>

            {/*konten*/}
            <div ref={container1}>
                <div className={"absolute right-10 top-90"}>
                    <TechStackItem name="React" icon="logos:react" />
                </div>
                <div className={"absolute right-20 top-120"}>
                    <TechStackItem name="Git" icon="logos:git-icon" />
                </div>
                <div className={"absolute left-20 top-120"}>
                    <TechStackItem name="TailwindCSS" icon="logos:tailwindcss-icon" />
                </div>
                <div className={"absolute left-20 top-40"}>
                    <TechStackItem name="WebStorm" icon="logos:webstorm" />
                </div>
                <div className={"absolute right-50 top-40"}>
                    <TechStackItem name="TypeScript" icon="logos:typescript-icon" />
                </div>
                <div className={"absolute right-70 top-65"}>
                    <TechStackItem name="Notion" icon="ri:notion-fill" />
                </div>
                <div className={"absolute bottom-18 left-10"}>
                    <TechStackItem name="Laravel" icon="logos:laravel" />
                </div>
                <div className={"absolute bottom-70 right-90"}>
                    <TechStackItem name="VSCode" icon="logos:greensock-icon" />
                </div>
                <div className={"absolute bottom-30 right-10"}>
                    <TechStackItem name="VSCode" icon="devicon:vscode" />
                </div>
                <div className={"absolute bottom-30 right-60"}>
                    <TechStackItem name="PHP" icon="devicon:php" />
                </div>
                <div className={"absolute bottom-45 right-150"}>
                    <TechStackItem name="PhpStorm" icon="logos:phpstorm" />
                </div>

            </div>
         <div>

         </div>
        </div>
    )
}