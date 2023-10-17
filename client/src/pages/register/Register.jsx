import './register.css'

export default function Register() {
  return (
    <div className='register'>
      <h2>Register</h2>
      <form>
        <label>Username</label>
        <input type="text" placeholder='Enter your username...' />
        <label>Email</label>
        <input type="email" placeholder='Enter your email...' />
        <label>Password</label>
        <input type="password" placeholder='Enter your password...' />
        <button>Register</button>
        <button>Login</button>
      </form>
    </div>
  )
}
