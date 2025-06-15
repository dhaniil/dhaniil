"use client"
import { useRef, useState} from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { StampIcon, MapPinIcon, MailIcon } from "lucide-react"

const data = {
    name: "Sender",
    date: new Date().toLocaleDateString(),
    message: "Tegami!",
}

export default function Tegami(){
    const [isOpen, setIsOpen] = useState(false)
    const tegamiRef = useRef<HTMLDivElement>(null)
    const flapRef = useRef<HTMLDivElement>(null)
    const envelopeRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if(tegamiRef.current && envelopeRef.current && flapRef.current){
            gsap.set(tegamiRef.current, {
                y: 0,
                opacity: 0,
                scale: 0.8,
            })
            gsap.set(flapRef.current, {
                rotateX: 0,
                transformOrigin: "top center"
            })
        }
    })
    
    useGSAP(() => {
        const tl = gsap.timeline()
        if(envelopeRef.current && flapRef.current && tegamiRef.current){
            isOpen 
                ? tl.to(flapRef.current, {
                    rotateX: 180,
                    duration: 0.3,
                    ease: "power2.in"
                  })
                  .to(envelopeRef.current, {
                    scaleY: 1,
                    y: 5,
                    duration: 0.4,
                    ease: "power3.in"
                  }, "-=0.1")
                  .to(tegamiRef.current, {
                    y: -80,
                    scale: 1.1,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.inOut"
                  }, "+=0.3")
                : tl.to(tegamiRef.current, {
                    y: 0,
                    scale: 0.8,
                    opacity: 0,
                    ease: "power2.in",
                    duration: 0.3
                  })  
                  .to(envelopeRef.current, { 
                    scaleY: 1,
                    y: 0,
                    duration: 0.3
                  }, "<")
                  .to(flapRef.current, {
                    rotateX: 0,
                    duration: 0.3,
                    ease: "power2.out"
                  }, "<0.3")
        }
    }, [isOpen])
    
    return (
        <div className="flex justify-center items-center h-screen [perspective:1000px]">
            <div 
                onMouseEnter={() => setIsOpen(true)} 
                onMouseLeave={() => setIsOpen(false)} 
                ref={envelopeRef} 
                className="bg-background border border-border rounded-lg p-4 h-56 shadow-md relative w-96 flex justify-center items-center hover:shadow-lg transition-shadow duration-300"
            >
                <div className="absolute bottom-2 left-4 text-xs text-muted-foreground font-jetbrains flex items-center gap-1">
                    <MapPinIcon className="w-3 h-3" />
                    {data.name}
                </div>

                <div className="absolute bottom-2 right-4 text-xs text-muted-foreground font-jetbrains">
                    {data.date}
                </div>
                

                <div 
                    ref={flapRef} 
                    className="absolute top-0 left-0 w-full h-1/3 bg-gray-200 rounded-t-lg border-b border-border"
                    style={{ clipPath: "polygon(0 0, 100% 0 , 100% 100%, 50% 70%, 0 100%)" }}
                >

                </div>
                
                <div className="absolute w-3/4 h-[0.5px] bg-border/50 top-[55%] left-1/2 -translate-x-1/2" />
                <div className="absolute w-3/4 h-[0.5px] bg-border/50 top-[65%] left-1/2 -translate-x-1/2" />
                <div className="absolute w-3/4 h-[0.5px] bg-border/50 top-[75%] left-1/2 -translate-x-1/2" />
                
                <div 
                    ref={tegamiRef} 
                    className="w-[85%] h-2/3 bg-card rounded-md p-4 shadow-inner z-10 border border-border"
                >
                    <Textarea 
                        defaultValue={data.message}
                        className="w-full h-full resize-none focus-visible:ring-0 border-none bg-transparent font-jetbrains text-sm text-foreground"
                    />
                </div>
            </div>
        </div>
    )
}