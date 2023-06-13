import React from 'react'

export default function Login() {
  return (
    <div>
        <p>Login</p>
        <form>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Login to your account</button>
        </form>
        <p>Don't have an account? <a>Sign Up</a></p>
    </div>
  )
}
