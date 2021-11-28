import Image from 'next/image'


import {ProviderButton} from './../ui/button/styles'
import google from './../../public/google.png'


function GoogleProvider (props){
    // auth with Google
    return(
        <ProviderButton>
            <Image 
            src={google} 
            alt="google logo" 
            Layout="fixed" 
            width={20}
            height={20}
            />
            <span>sign up with google</span>
        </ProviderButton>
    )
}

export default GoogleProvider