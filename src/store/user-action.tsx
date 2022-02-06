import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { auth } from "../Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"

export const userSignUp = (username: string, email: string, password: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const createUser = async () => {
            await createUserWithEmailAndPassword(auth, email, password).then(cred => {
                updateProfile(auth.currentUser!, {
                    displayName: username 
                  })
            })
        }
        try {
            createUser()
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
            userLogin()
        } catch {
            console.log('error')
        }
    }
}