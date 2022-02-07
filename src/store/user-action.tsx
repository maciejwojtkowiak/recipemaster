import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { auth } from "../Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth"
import { uiAction } from "./ui-slice"


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
            dispatch(uiAction.isLoggedIn(true))
            
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
            dispatch(uiAction.isLoggedIn(false))
        }

        try {
            await logout()
        } catch {
            console.log('error')
        }
    }
}

export const handleLoggedInState = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const getUser = async () => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    dispatch(uiAction.isLoggedIn(true))
                } else {
                    dispatch(uiAction.isLoggedIn(false))
                }
            })
        }

        try {
            await getUser()
            
        } catch {
            console.log('error')
        }
    }
}


