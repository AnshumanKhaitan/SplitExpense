import { createAuthClient } from "better-auth/client";
import { sentinelClient } from "@better-auth/infra/client";

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_AUTH_URL || "http://localhost:5173",
  plugins: [
    sentinelClient()
  ]
})
