import { createClient } from "../supabase/client";
import { Guestbook } from "@/types/guestbook";


export async function fetchGuestbooks() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from<"guestbooks", Guestbook>("guestbooks")
        .select("*")
        .order("created_at", { ascending: false });
    if(error) {
        console.error("Error fetching guestbooks:", error);
        return [];
    }
    return data || [];
}