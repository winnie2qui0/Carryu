import React from 'react'
import { Container, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon,
    Form,
    Text
 } from './SigninElements'

const SignIn = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">CarryU</Icon>
                <FormContent>
                    <Form action ="#">
                        <FormH1>Sign in your account</FormH1>
                        <FormLabel htmlFor='for'> Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Contimue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn
