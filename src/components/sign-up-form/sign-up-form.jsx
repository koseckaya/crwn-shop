import { useState } from 'react'
import { createAuthUserWithEmail, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import FormInput from '../form-input/form-input'
import Button, { BUTTON_TYPE} from '../button/button'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/user.action'
import './sign-up-form.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    const dispatch = useDispatch()

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('password do not match')
            return
        }

        try {
           // const { user } = await createAuthUserWithEmail(email, password)
           // await createUserDocumentFromAuth(user, { displayName })

           dispatch(signUpStart(email, password, displayName))
            resetFormFields()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email-already-in-use')
            }
            console.log('user creation error', error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with email & password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' required type='text' name='displayName' onChange={handleChange} value={displayName} />
                <FormInput label='Email' required type='email' name='email' onChange={handleChange} value={email} />
                <FormInput label='Password' required type='password' name='password' onChange={handleChange} value={password} />
                <FormInput label='Confirm Password' required type='password' name='confirmPassword' onChange={handleChange} value={confirmPassword} />
                <Button buttonType={BUTTON_TYPE.google} type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm