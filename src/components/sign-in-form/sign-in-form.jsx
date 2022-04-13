import { useState } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmail } from '../../utils/firebase/firebase'
import FormInput from '../form-input/form-input'
import Button, { BUTTON_TYPE } from '../button/button.jsx'
import './sign-in-form.scss'
import { collection } from 'firebase/firestore'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()


        try {
            const { user } = await signInAuthUserWithEmail(email,password)
            resetFormFields()

        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('no user with this email');
                    break;   
                default:
                    console.log(error)
            }        
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign up with email & password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Email' required type='email' name='email' onChange={handleChange} value={email} />
                <FormInput label='Password' required type='password' name='password' onChange={handleChange} value={password} />
                <div className='buttons-container'>
                    <Button  type='submit'>Sign In</Button>
                    <Button type="button" buttonType={ BUTTON_TYPE.google } onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm