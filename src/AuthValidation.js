import {supabaseClient} from "./Supabase"

export async function ProtectPage() {

  const session = sessionStorage.getItem("Sesion")

  if (!session) {
    return { exist: false, user: {} } 
  }

  const sessionData = JSON.parse(session)
  const {data, error} = await supabaseClient.from("users").select().eq("Correo", sessionData.email) 

  if (error || data.length == 0) {
    sessionStorage.removeItem("Sesion")
    return { exist: false, user: {} } 
  }

  return { exist: true, user: data[0] } 
} 

