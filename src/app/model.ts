export interface User{
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    roles: Permission[]
}
export interface JWT{
    jwt: string
}
export interface RoleType{
    role: string
}
export interface Permission{
    id: number,
    role: string
}
export interface Vacuum{
    id: number,
    name: string,
    status: string,
    addedBy: User,
    active: boolean,
    dateAdded: string,
    startCount: number
}
export interface ErrorMessage{
    id: number,
    date: string,
    vacuum: Vacuum,
    operation: string,
    message: string,
    user: User
}