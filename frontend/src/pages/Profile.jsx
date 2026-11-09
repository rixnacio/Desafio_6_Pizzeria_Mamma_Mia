import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // En este hito la sesión es solamente demostrativa, tal como indica la pauta.
    navigate('/login')
  }

  return (
    <main className="container py-5 profile-page">
      <section className="profile-card mx-auto bg-white rounded shadow-sm p-4">
        <h1 className="h3 mb-4">Mi perfil</h1>
        <p className="mb-4"><strong>Email:</strong> usuario@pizzeriamammamia.cl</p>
        <button className="btn btn-danger" type="button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </section>
    </main>
  )
}

export default Profile
