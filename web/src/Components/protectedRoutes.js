import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const auth = localStorage.getItem('test'); // Vérifier la présence du token dans le stockage local
    return (
        auth ? <Outlet /> : <Navigate to="/login" replace /> // sinon revoit vers login
    )
}

export default PrivateRoutes