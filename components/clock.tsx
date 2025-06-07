"use client"
import { useState, useEffect } from 'react'

export default function Clock() {
    const [currentTime, setCurrentTime] = useState<Date | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setCurrentTime(new Date())
        
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!mounted || !currentTime) {
        return (
            <div className="fixed bottom-15 right-10 text-gray-300">
                <span className="font-light text-9xl font-jetbrains">Loading...</span>
            </div>
        )
    }

    return (
        <div className="fixed bottom-15 right-10 text-gray-300">
            <span className="font-light text-9xl font-jetbrains">
                {currentTime.toLocaleString()}
            </span>
        </div>
    )
}