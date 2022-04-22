import SignUpForm from '../../components/sign-up-form/sign-up-form'
import SignIpForm from '../../components/sign-in-form/sign-in-form'
import React from 'react'
import { AuthenticationContainer } from './authentication.style';


const Authentication = () => {

   return (
        <AuthenticationContainer>                     
            <SignIpForm/>
            <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication