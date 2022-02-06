import React from "react"
import { useState } from "react"
import {Box, Input, FormControl, Button, Grid} from '@chakra-ui/react'
import { userLogin} from "../../store/user-action"
import { useDispatch } from "react-redux"


const LoginForm = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(userLogin(email, password))
        
    }
   

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>, setValue: Function) => {
        setValue(e.target.value)
    }

    return (
        <Box height="95vh" width="100%">
            <Grid height="100%" placeItems="center">
                <form onSubmit={onSubmitHandler}>
                    <FormControl textAlign="center">
                        <Input name="email" placeholder="Type your email" onChange={(e) => {changeHandler(e, setEmail)}} />
                        <Input name="password" placeholder="Type your password" onChange={(e) => {changeHandler(e, setPassword)}} />
                        <Button type="submit">Register</Button>
                    </FormControl>
                </form>
            </Grid>
        </Box>
    )
}

export default LoginForm