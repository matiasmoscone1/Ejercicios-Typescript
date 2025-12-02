import { ReactNode } from "react"


export type AuthUser = {
    id: number,
    name: string,
    role: "admin" | "user"
}

export type AuthContextType = {
    user: AuthUser | null,
    login: (username: string, password: string) => void,
    logout: () => void
}


export type AuthProviderProps = {
    children: ReactNode
}
