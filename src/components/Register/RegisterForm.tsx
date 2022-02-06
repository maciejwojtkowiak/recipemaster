import React from "react"
import { useState } from "react"
import { auth } from "../../Firebase"
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {Box, Input, FormControl, Button, Grid} from '@chakra-ui/react'

const RegisterForm = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const createUser = async () => {
            await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser!, {
            displayName: username 
          })
        }
        createUser()
    }
    

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>, setValue: Function) => {
        setValue(e.target.value)
    }

    return (
        <Box height="95vh" width="100%">
            <Grid height="100%" placeItems="center">
                <form onSubmit={onSubmitHandler}>
                    <FormControl textAlign="center">
                        <Input name="username" placeholder="Type your username" onChange={(e) => {changeHandler(e, setUsername)}} />
                        <Input name="email" placeholder="Type your email" onChange={(e) => {changeHandler(e, setEmail)}} />
                        <Input name="password" placeholder="Type your password" onChange={(e) => {changeHandler(e, setPassword)}} />
                        <Button type="submit">Register</Button>
                    </FormControl>
                </form>
            </Grid>
        </Box>
    )
}

export default RegisterForm