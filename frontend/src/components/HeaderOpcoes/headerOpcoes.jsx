import './headerOpcoes.css';
import { Link } from 'react-router-dom';


const headerOpcoes = ['receitas', 'favoritos', 'criar'];

function HeaderOpcoes() {
    return (
        <ul className='header-opcoes'>
            { headerOpcoes.map( (opcao, index) => (
                    <Link key={index} to={`/${opcao}`} className='opcoes-opcao'>
                        <li>
                            <p>{opcao}</p>
                        </li>
                    </Link>
                ))}
        </ul>
    )
}

export default HeaderOpcoes