import { ReactNode } from "react"


export type AuthUser = {
    id: number,
    name: string,
    role: "admin" | "user"
}

export type AuthProviderProps = {
    children: ReactNode
}
