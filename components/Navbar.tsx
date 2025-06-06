import { ChartBarBig } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard"
  },
  {
    title: "Products",
    href: "/products"
  },
  {
    title: "Orders",
    href: "/orders"
  },
  {
    title: "Settings",
    href: "/settings"
  }
];

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mx-auto px-6 py-4  rounded-lg shadow-2xl">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <ChartBarBig className="text-white" size={24} />
        </div>
        <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Laznology
        </span>
      </Link>
      
      <nav className="flex gap-2">
        {navItems.map((item) => (
          <Link 
            key={item.title}
            href={item.href}
            className="relative px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:backdrop-blur-sm group overflow-hidden"
          >
            <span className="relative z-10">{item.title}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
          </Link>
        ))}
      </nav>
    </div>
  )
}