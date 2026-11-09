import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('')
    setError('')

    if (!email || !password) {
      setError('Todos los campos son obligatorios.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters!')
      return
    }

    setMessage('Authentication successful!')
    navigate('/')
  }

  return (
    <main className="form-page container py-5">
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="login-email" className="form-label">Email</label>
            <input
              id="login-email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="login-password" className="form-label">Password</label>
            <input
              id="login-password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}
        {message && <div className="alert alert-success mt-3 mb-0">{message}</div>}
      </div>
    </main>
  )
}

export default Login
