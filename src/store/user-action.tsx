import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { auth } from "../Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, getAuth} from "firebase/auth"

export const userSignUp = (username: string, email: string, password: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const createUser = async () => {
            await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser!, {
                displayName: username 
            })
          
        }
        try {
            createUser()
            console.log('created')
        } catch {
            console.log('error')
        }
    }

}

export const userLogin = (email: string, password: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const userLogin = async () => {
            const user = await signInWithEmailAndPassword(auth, email, password)
            return user
        }

        try {
            const user = await userLogin()
            if (user) {
                console.log('user logged in')
                console.log(auth.currentUser)
            }
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
            logout()
        } catch {
            console.log('error')
        }
    }
}

