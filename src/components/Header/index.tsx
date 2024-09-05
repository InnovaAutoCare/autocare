import './index.css'
import logoHeader from "../../assets/svg/logo.svg";
import { useRef, useState } from 'react';

function Header() {
    const [isNavActive, setIsNavActive] = useState(false);
    const hamburguerRef = useRef(null);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };
  return (
    <>
      <header>
        <nav className={`nav container ${isNavActive ? 'active' : ''}`}>
            <a href="index.html">
                <img src={logoHeader} alt="Logo Innova AutoCare"/>
            </a>
            <button 
                    className="hamburguer" 
                    onClick={toggleNav}
                    ref={hamburguerRef}
                >
                </button>
            <ul className="nav-list">
                <li><a href="#sobre-serviço">DIFERENCIAIS</a></li>
                <li><a href="#como-funciona">COMO FUNCIONA</a></li>
                <li><a href="integrantes.html">QUEM SOMOS NÓS</a></li>
                <li><a href="login.html" className="area-cliente">ÁREA DO CLIENTE</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header;