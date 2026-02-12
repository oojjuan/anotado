import './headerOpcoes.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';


const headerOpcoes = ['receitas', 'favoritos', 'criar'];

function HeaderOpcoes() {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className='header-opcoes-wrapper' ref={ref}>
            <button className={`menu-toggle ${open ? 'open' : ''}`} aria-expanded={open} aria-label="Abrir menu" onClick={() => setOpen(!open)}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>

            <ul className={`header-opcoes ${open ? 'open' : ''}`}>
                { headerOpcoes.map( (opcao, index) => (
                    <Link key={index} to={`/${opcao}`} className='opcoes-opcao' onClick={() => setOpen(false)}>
                        <li>
                            <p>{opcao}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default HeaderOpcoes