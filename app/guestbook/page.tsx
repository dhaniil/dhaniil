"use client"
import { fetchGuestbooks } from "@/lib/api/guestbook"
import type { Guestbook } from "@/types/guestbook"
import { useState, useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { toast } from "sonner"
import GuestbookForm from "@/components/guestbook-form"
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(SplitText)

const kawaiiTexts = [
  "ฅ^•ﻌ•^ฅ",             
  "(=^-ω-^=)",            
  "(=①ω①=)",            
  "(^・ω・^ )",           
  "(＾• ω •＾)",          
  "(=ＴェＴ=)",           
  "ฅ(＾・ω・＾ฅ)",       
  "(=^-ω-^=)ノ",          
  "〜(꒪꒳꒪)〜",           
  "(ↀДↀ)✧",           
  "ヽ(=^･ω･^=)丿",        
  "₍˄·͈༝·͈˄₎ฅ˒˒",         
]


export default function Guestbook(){  
    const [guestbooks, setGuestbooks] = useState<Guestbook[]>([])
    const [animate, setAnimate] = useState<boolean>(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [kawaiiIndex, setKawaiiIndex] = useState(0)

    const card = useRef<HTMLDivElement>(null)
    const heading = useRef<HTMLDivElement>(null)

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
        
    useEffect(() => {
        if (heading.current) {
            const split = SplitText.create(heading.current, { type: "chars" })
            gsap.from(split.chars, {
                y: -50,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
                stagger: 0.05,
            })
        }
    }, [kawaiiIndex])

    const handleMouseEnter = () => {
        setKawaiiIndex((prev) => (prev + 1) % kawaiiTexts.length)
    }

    if(error){
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-red-500 text-lg">{error}</div>
            </div>
        )
    }

    const bgVariants = [
  "bg-rose-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
]



return (
  <div className="h-full w-full px-4 py-8 md:px-8 bg-background">
    <div className="text-center mb-8">
      <h2
        onMouseEnter={handleMouseEnter}
        ref={heading}
        className="font-bold text-3xl cursor-pointer select-none transition-transform duration-300 hover:scale-105"
      >
        {kawaiiTexts[kawaiiIndex]}
      </h2>
      <p className="text-sm text-muted-foreground mt-2 ">
        Hover me!
      </p>
    </div>


<div className="max-w-xl mx-auto items-center flex justify-center mb-10">

    <GuestbookForm />

</div>


    {loading ? (
      <div className="flex items-center justify-center h-48">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 max-w-5xl mx-auto">
        {guestbooks.map((guestbook, index) => (
  <Card
    ref={card}
    key={guestbook.id}
    className={`rounded-2xl border border-border shadow-md hover:shadow-xl transition-shadow duration-300 backdrop-blur-md ${bgVariants[index % bgVariants.length]}`}
  >
    <CardContent className="p-5 flex items-start gap-4 relative">

      <Avatar className="flex-shrink-0 border border-white shadow">
        <AvatarImage src={guestbook.avatar_url} />
        <AvatarFallback>{guestbook.name[0]}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <div className="font-semibold text-foreground">{guestbook.name}</div>
        <div className="text-sm text-muted-foreground mt-1">{guestbook.message}</div>
        <div className="text-xs text-muted-foreground mt-2">
          {new Date(guestbook.created_at).toLocaleString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }) +
            " • " +
            new Intl.RelativeTimeFormat("id", { numeric: "auto" }).format(
              -Math.floor(
                (Date.now() - new Date(guestbook.created_at).getTime()) /
                  (1000 * 60 * 60 * 24)
              ),
              "day"
            )}
        </div>
      </div>
    </CardContent>
  </Card>
))}
      </div>
    )}
  </div>
)

}
