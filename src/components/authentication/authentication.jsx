import SignUpForm from '../../components/sign-up-form/sign-up-form'
import SignIpForm from '../../components/sign-in-form/sign-in-form'
import './authentication.scss'


const Authentication = () => {

   return (
        <div className='authentication-container'>                     
            <SignIpForm/>
            <SignUpForm />
        </div>
    )
}

export default Authentication