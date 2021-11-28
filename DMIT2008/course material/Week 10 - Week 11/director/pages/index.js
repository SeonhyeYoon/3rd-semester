import firebase from '../firebase'

import Button from '../components/ui/button';
import GoogleProvider from '../components/auth/google';
import NavBar from '../components/navbar'
import Brand from './../components/branding'

export default function Home() {

  return (
     <div>
       <NavBar />
       <Brand title="Home Page" tagline="directory app start"/>
       {/* <Button bgcolor="tomato" color="white">sign up with firebase</Button>       */}
       <GoogleProvider />
     </div>
  )
}
