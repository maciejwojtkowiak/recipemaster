import React from "react"
import { useState } from "react"
import { auth } from "../../Firebase"
import { createUserWithEmailAndPassword} from "firebase/auth"

const RegisterForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>, setValue: Function) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input name="email" onChange={(e) => {changeHandler(e, setEmail)}} />
            <input name="password" onChange={(e) => {changeHandler(e, setPassword)}} />
            <button type="submit">Send</button>
        </form>
    )
}

export default RegisterForm