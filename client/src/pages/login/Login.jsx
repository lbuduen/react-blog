import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder='Enter your email...' />
        <label>Password</label>
        <input type="password" placeholder='Enter your password...' />
        <button>Login</button>
        <button>Register</button>
      </form>
    </div>
  )
}
