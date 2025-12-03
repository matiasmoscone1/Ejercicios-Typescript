import { ReactNode } from "react"


export type AuthUser = {
    id: number,
    name: string,
    role: "admin" | "user"
}

export type AuthContextType = {
    user: AuthUser | null,
    login: (username: string, password: string) => void,
    logout: () => void,
    isLogged: boolean,
    apiUsers: ApiUser[] | null,
    setApiUsers: (prev: ApiUser[]) => void,
    isLoading: boolean,
    fetchApi: () => void,
    addUser: (user: ApiUser) => void,
    deleteUser: (id: number) => void,
    editUser: (user: ApiUser) => void
}

export type AuthProviderProps = {
    children: ReactNode
}

export interface ApiUser {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export type EditUser = {
    isEdit: boolean,
    name: string;
    email: string;
    phone: string;
}