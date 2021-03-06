export interface Session {
    bearer: string
    subject: AuthSubject
    expiresIn: number | string
}

export interface AuthSubject {
    _id: string
    name: string
    settings: {
        theme: 'light' | 'dark'
        picture: string
    }
}
