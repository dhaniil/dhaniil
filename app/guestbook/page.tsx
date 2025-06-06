"use client"
import { fetchGuestbooks } from "@/lib/api/guestbook"
import type { Guestbook } from "@/types/guestbook"
import { useState, useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { toast } from "sonner"


export default function Guestbook(){  
    const [guestbooks, setGuestbooks] = useState<Guestbook[]>([])
    const [animate, setAnimate] = useState<boolean>(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const card = useRef<HTMLDivElement>(null)

    useEffect(() => {   
        async function loadGuestbooks() {
            setLoading(true)
            const data = await fetchGuestbooks()
            if(data){
                setGuestbooks(data)
            } else {
                setError("Failed to load guestbooks")
                toast.error("Gagal memuat buku tamu")
            }
            setLoading(false)
        }
        loadGuestbooks()
    }, [])

    useEffect(() => {
        if(!loading && guestbooks.length > 0){
            const timeout = setTimeout(() => {
                setAnimate(true)
            }, 3000)
            return () => clearTimeout(timeout)
        }
    }, [loading, guestbooks])

    useGSAP(() => {
        if(!loading && guestbooks.length > 0){
        gsap.fromTo(card.current, {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.1,
            delay: loading ? 0 : 0.5
        })
        }
    }, [animate])

    if(loading){
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
            </div>
        )
    }

    if(error){
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-red-500 text-lg">{error}</div>
            </div>
        )
    }

    return (
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
            {guestbooks.map(guestbook => (
                <Card ref={card} key={guestbook.id} className="drop-shadow-lg">
                    <CardContent className="p-4 flex items-start gap-4">
                        <Avatar>
                            <AvatarImage src={guestbook.avatar_url} />
                            <AvatarFallback>{guestbook.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-semibold">{guestbook.name}</div>
                            <div className="text-sm text-muted-foreground">{guestbook.message}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                                {new Date(guestbook.created_at).toLocaleString('id-ID', { 
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                }) + ' • ' + new Intl.RelativeTimeFormat('id', { numeric: 'auto' }).format(
                                    -Math.floor((Date.now() - new Date(guestbook.created_at).getTime()) / (1000 * 60 * 60 * 24)),
                                    'day'
                                )}
                            </div>
                        </div>
                    </CardContent>
                 </Card>
            ))}
        </div>
    )
}