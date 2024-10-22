"use server"
import { signIn } from "@/auth"
const signin = async () => {
    "use server"
    await signIn("google")
  }

export {signin}