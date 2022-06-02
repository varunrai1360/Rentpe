import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import OAuth from '../components/OAuth'
// import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
     toast.error('Bad User Credentials')
    }
  }

  //<form onSubmit={onSubmit}></form>  on line 55

  return (
    <>
      <div className='pageContainer' >


     


        <div style={{ paddingTop: "5px", textAlign: "center" }}>
                   
                    <div style={{ padding: "px 0 14px 0" }}>
                    <h1 style={{ fontSize: "1.8rem", fontWeight: "800", lineHeight: "1.3333", color: "#000", fontFamily: "OpenSans, Arial, Helvetica, sans-serif" }}>Welcome Back</h1>
                        <p style={{ fontSize: "1.0rem", fontWeight: "500",lineHeight: "1.75", padding: "0 10px 20px 10px", color: "rgba(0,0,0,0.6)", fontFamily: "OpenSans, Arial, Helvetica, sans-serif" }}>Register to put your apartments on sale or rent...!!</p>
                    </div>


                    <div style={{ flexDirection: "column" }}>

                        <div style={{ paddingRight: "0px", maxWidth: "1240px", display: "flex", justifyContent: "center", flexDirection: "row", margin: "0 auto", alignContent: "center", padding: "0 20px 0 20px" }}>

                            <div style={{ marginBottom: "39px", width: "500px" }}>

        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />

          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt='show password'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>

          <div className='signInBar' style={{display:'flex',justifyContent:'center'}}>
           {/*} <p className='signInText'>Sign In</p>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
  */}
            <button className="btn form-control" id="but" type="submit" style={{ marginTop: "-20px",width:'100%',border:"1px solid rgb(0, 121, 107)", borderRadius:'5px' }} name="book" >Sign In </button>
          </div>
        </form>
        </div>
        </div>
        </div>
        </div>
      

        <OAuth /> 

        <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
        </Link>
      </div>
    </>
  )
}

export default SignIn