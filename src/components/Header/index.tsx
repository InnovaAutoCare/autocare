import style from './index.module.css'
import styleIndex from '../../index.module.css'

import logoHeader from "../../assets/svg/logo.svg";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isNavActive, setIsNavActive] = useState(false);
    const hamburguerRef = useRef(null);

    const toggleNav = () => {
        console.log('Button clicked!'); 
        setIsNavActive(!isNavActive);
    };
  return (
    <>
      <header>
        <nav className={`${style.nav} ${styleIndex.container} ${isNavActive ? style.active : ''}`}>
            <Link to='/'>
                <img src={logoHeader} alt="Logo Innova AutoCare"/>
            </Link>
            <button 
                    className={style.hamburguer}
                    onClick={toggleNav}
                    ref={hamburguerRef}
            >
            </button>
            <ul className={style.nav_list}>
                <li><a href="#sobre-serviço">DIFERENCIAIS</a></li>
                <li><a href="#como-funciona">COMO FUNCIONA</a></li>
                <li><Link to="/integrantes">QUEM SOMOS NÓS</Link></li>
                <li><Link to="/login" className={style.area_cliente}>ÁREA DO CLIENTE</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header;