import './header.css'
import logo from '../../imgs/Logo_Grande.png'
import HeaderOpcoes from '../HeaderOpcoes/headerOpcoes'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();

    return (
        <header className='header'>
            <img className='header-logo' src={logo} alt='Logo' onClick={() => navigate('/inicio')} />
            <HeaderOpcoes />
        </header>
    )
}

export default Header