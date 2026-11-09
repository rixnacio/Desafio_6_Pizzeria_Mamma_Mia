import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { total } = useCart()
  const linkClass = ({ isActive }) =>
    `btn btn-sm ${isActive ? 'btn-light text-dark' : 'btn-outline-light'}`

  return (
    <nav className="navbar navbar-dark bg-dark px-3 py-2">
      <div className="container-fluid gap-3">
        <Link className="navbar-brand mb-0 h1" to="/">
          🍕 Pizzería Mamma Mia!
        </Link>
        <div className="d-flex gap-2 flex-wrap justify-content-end">
          <NavLink className={linkClass} to="/">🏠 Home</NavLink>
          <NavLink className={linkClass} to="/login">🔐 Login</NavLink>
          <NavLink className={linkClass} to="/register">📝 Register</NavLink>
          <NavLink className={linkClass} to="/profile">👤 Profile</NavLink>
          <NavLink className={linkClass} to="/404">❓ 404</NavLink>
          <Link className="btn btn-outline-info btn-sm" to="/cart">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
