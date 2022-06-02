import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset email')
    }
  }

  return (
    <div className='pageContainer'>
    <div style={{ paddingTop: "5px", textAlign: "center" }}>
                   
    <div style={{ padding: "px 0 14px 0" }}>
    <h1 style={{ fontSize: "1.8rem", fontWeight: "800", lineHeight: "1.3333", color: "#000", fontFamily: "OpenSans, Arial, Helvetica, sans-serif" }}>Welcome Back</h1>
        <p style={{ fontSize: "1.0rem", fontWeight: "500",lineHeight: "1.75", padding: "0 10px 20px 10px", color: "rgba(0,0,0,0.6)", fontFamily: "OpenSans, Arial, Helvetica, sans-serif" }}>Register to manage your gully cricket records through your mobile's...!!</p>
    </div>


    <div style={{ flexDirection: "column" }}>

        <div style={{ paddingRight: "0px", maxWidth: "1240px", display: "flex", justifyContent: "center", flexDirection: "row", margin: "0 auto", alignContent: "center", padding: "0 20px 0 20px" }}>

            <div style={{ marginBottom: "39px", width: "500px" }}>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <Link className='forgotPasswordLink' to='/sign-in'>
            Sign In
          </Link>

          <div className='signInBar'>
          {/*  <div className='signInText'>Send Reset Link</div>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>*/}
            <button className="btn form-control" id="but" type="submit" style={{ marginTop: "-20px" }} name="book" >Sign In </button>
          </div>
        </form>
        
      </main>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ForgotPassword