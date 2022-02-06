import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { auth } from "../Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth"

export const userSignUp = (username: string, email: string, password: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const createUser = async () => {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser!, {
                displayName: username 
            })

            return user
         
        }
        try {
            await createUser()
        } catch {
            console.log('error')
        }
    }

}

export const userLogin = (email: string, password: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const userLogin = async () => {
            await signInWithEmailAndPassword(auth, email, password)
            
        }

        try {
            await userLogin()
        } catch {
            console.log('error')
        }
    }
}

export const userLogout = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const logout = async () => {
            await signOut(auth)
        }

        try {
            await logout()
        } catch {
            console.log('error')
        }
    }
}

