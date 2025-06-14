"use client"

import { usePathname } from "next/navigation"
import { useMemo, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const pages: Record<string, string> = {
    "/": "Homu",
    "/about": "Purofiiru",
    "/projects": "Purojekuto",
    "/works": "Waakusu",
    "/guestbook": "Gesutobukku",
    // "/blog": "Burogu"
}

const pageNumbers: Record<string, string> = {
  "/": "001",  
  "/about": "002",
  "/projects": "003",
  "/works": "004", 
  "/guestbook": "005", 
  "/blog": "006"
}

export default function PageIndicators() {
  const pathname = usePathname()
  
  const locationContainer = useRef<HTMLDivElement>(null)
  const locationText = useRef<HTMLDivElement>(null)

  const pathContainer = useRef<HTMLDivElement>(null)
  const pathText = useRef<HTMLDivElement>(null)
  

  const pageName = useMemo(() => {
    return pages[pathname] || pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)
  }, [pathname])

  const pageNumber = useMemo(() => {
    return pageNumbers[pathname] || "000"
  }, [pathname])
  
  useGSAP(() => {
    if (locationText.current) {
      gsap.set(locationText.current, {
        opacity: 0,
        scale: 0.8,
      })
      
      gsap.to(locationText.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      })
    }
    if (pathText.current) {
      gsap.set(pathText.current, {
        opacity: 0,
        x: -20
      })
      
      gsap.to(pathText.current, {
        opacity: 0.7,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
      })
    }
  }, { dependencies: [pathname] })
  
  return (
    <>
      <div 
        ref={locationContainer}
        className="absolute right-5 top-30 z-20"
      >
        <div 
          ref={locationText}
          className="transform writing-vertical-rl"
        >
          <p className="font-jetbrains-mono text-2xl text-center font-bold text-gray-700 opacity-70 tracking-[0.3em]">
            {Array.from(pageName).map((char, index) => (
                <span
                 key={index}
                 className="block my-1">
                    {char}
                </span>
                ))}
          </p>
        </div>
      </div>

      <div 
        ref={pathContainer}
        className="absolute left-8 bottom-25 md:bottom-20 z-10"
      >        
      <div 
          ref={pathText}
        >          
        <p className="font-antonio text-center text-2xl md:text-2xl lg:text-4xl text-gray-800 tracking-[0.2em] font-bold">
            {Array.from(pageNumber).map((number, index) => (
                <span 
                  key={index} 
                  className="block my-1" 
                >
                  {number}
                </span>
            ))}
          </p>
        </div>
      </div>
    </>
  )
}