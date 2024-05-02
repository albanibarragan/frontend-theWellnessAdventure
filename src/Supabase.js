import { createClient } from "@supabase/supabase-js"


// Obtenemos las variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseApiKey = import.meta.env.VITE_SUPABASE_APIKEY

// Inicializamos el cliente de supabase
export const supabaseClient = createClient(supabaseUrl, supabaseApiKey)