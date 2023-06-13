import React from 'react'

export default function SignUp() {
  return (
    <div>
        <p>Sign Up</p>
        <form>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Repeat Password' />
          <button>Create an account</button>
        </form>
        <p>Already have an account? <a>Login</a></p>
    </div>
  )
}
