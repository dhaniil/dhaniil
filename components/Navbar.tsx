"use client";
import { ChartBarBig } from "lucide-react";
import Link from "next/link";
import { AuthModal } from "./auth-modal";
import ProfileNavbar from "./auth/profile-navbar";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

const navItems = [
  {
    title: "Home",
    href: "/"
  },
  // {
  //   title: "About",
  //   href: "/about"
  // },
  // {
  //   title: "Project",
  //   href: "/project"
  // },
  {
    title: "Guestbook",
    href: "/guestbook"
  }
];

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };
    
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  return (
    <div className="flex justify-between items-center mx-auto px-3 py-2">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="p-2 bg-black rounded-lg group-hover:scale-110 transition-transform duration-300">
          <ChartBarBig className="text-white" size={24} />
        </div>
      </Link>
      
      <nav className="flex gap-1 items-center">
        {navItems.map((item) => (
          <Link 
            key={item.title}
            href={item.href}
            className="relative px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-300 rounded-lg group overflow-hidden"
          >
            <span className="relative z-10 font-bold text-zinc-900">{item.title}</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></div>
          </Link>
        ))}
      </nav>

      <div className="flex items-center">
        {!loading && (
          user ? (
            <ProfileNavbar user={user} />
          ) : (
            <AuthModal />
          )
        )}
      </div>
    </div>
  )
}