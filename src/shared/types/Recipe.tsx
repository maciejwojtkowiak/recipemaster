import { User } from "firebase/auth";

export type Recipe = {
    id: number,
    user: string,
    title: string, 
    type: string,
    description: string,

}

