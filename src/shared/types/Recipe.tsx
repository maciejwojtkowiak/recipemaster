import { User } from "firebase/auth";

export type Recipe = {
    id: number,
    user: User,
    title: string, 
    type: string,
    description: string,

}

