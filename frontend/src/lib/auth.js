import { betterAuth } from "better-auth";
import { dash } from "@better-auth/infra";

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.VITE_GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [
    dash()
  ]
})
