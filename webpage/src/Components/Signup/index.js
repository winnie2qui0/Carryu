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
    
 } from './SignupElements'

const SignUp = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">CarryU</Icon>
                <FormContent>
                    <Form action ="#">
                        <FormH1>Sign up for a new account</FormH1>
                        <FormLabel htmlFor='for'> Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor='for'> Phone number</FormLabel>
                        <FormInput type='phone' required />
                        <FormLabel htmlFor='for'> Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign Up</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignUp
