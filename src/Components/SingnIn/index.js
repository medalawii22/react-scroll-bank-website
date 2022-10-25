import React from 'react'
import {
    Container,
    FormWrap,
    FormButton,
    FormContent,
    Form,
    FormInput,
    FormLabel,
    FormH1,
    Text,
    Icon
} from './SigninElements'

const Signin = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon href="/">Alawii</Icon>
            <FormContent>
                <Form action ="#">
                    <FormH1>Sign in to your your account</FormH1>
                    <FormLabel htmlFor='for'>email</FormLabel>
                    <FormInput type="email" required/>
                    <FormLabel htmlFor='for'>Pasword</FormLabel>
                    <FormInput type="password" required/>
                    <FormButton>submit</FormButton>
                    <Text>forgot password?</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container> 
    </>
  )
}

export default Signin
