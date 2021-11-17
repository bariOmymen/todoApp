import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import './styles.css'



export default function Signup({props}) {
  const [email, setEmail] = useState()
  const [confirmed, setConfirmed] = useState()
  const [password, setPassword] = useState()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  

  async function handleSubmit(e) {
    e.preventDefault()

    if (password !== confirmed) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(email, password)
     
      
      
    } catch(e) {
      setError(e.message)
    }

    setLoading(false)
  }

  return (
    <> 
    <div className="container">
      <div className="logcontainer">
        
        <div>
          <h2 className="">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form className='signup-form form' onSubmit={handleSubmit}>
              <h3>Enter your details</h3>
<div className="email form-input">
                <label htmlFor="email">Email</label>
                <input value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email@email.coom"
                type="text">

                </input>
                </div>

<div className="password form-input">
                <label htmlFor="password">Password</label>
                <input value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="password"
                type='password'
                >
                    
                </input>
                </div>
<div className="confirm form-input">
                <label htmlFor="confirmation">confirmation</label>
                <input value={confirmed} 
                 type="password"
                onChange={(e) => setConfirmed(e.target.value)} 
                placeholder="confirmation">

                </input>
                </div>
                <div className="submit">
                    <input className='btn submit-Button' type='submit' value="Signup" />
                </div>
            </form>
        </div>
        <div>
<Link to='/' className="notes btn">Go to notes</Link>
        </div>
      </div>
      </div>
     
    </>
  )
}