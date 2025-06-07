import {Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader} from "@/components/ui/sheet";
import { ChartBarBig } from "lucide-react";

export default function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="p-2 text-white rounded-lg">
                    <ChartBarBig className="text-black" size={24} />
                </button>
            </SheetTrigger>
            <SheetContent 
                side="left" 
                className="w-64 p-0 bg-black text-white border-r border-gray-800 sm:max-w-none"
                style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    width: '16rem',
                    height: '100%',
                    zIndex: 40,
                    borderTopLeftRadius: '6px',
                    borderBottomLeftRadius: '0px'
                }}
            >
                <SheetHeader className="p-4 pb-2">
                    <SheetTitle className="text-xl font-bold text-left text-white">Discover</SheetTitle>
                </SheetHeader>
                
                <div className="p-4 pt-2">
                    <p>OTW</p>
                </div>
                
                <div className="absolute bottom-4 left-4">
                    <span className="font-antonio text-9xl text-gray-500">{new Date().getFullYear()}</span>
                </div>
            </SheetContent>
        </Sheet>
    )
}