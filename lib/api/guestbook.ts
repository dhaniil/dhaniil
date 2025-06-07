
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


export async function createGuestbook(message: string, name: string, avatarUrl: string) {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('guestbooks')
    .insert(
      {
        message: message,
        name: name,
        avatar_url: avatarUrl,
        created_at: new Date().toISOString()
      }
    );

  if (error) throw error;
  return data;
}