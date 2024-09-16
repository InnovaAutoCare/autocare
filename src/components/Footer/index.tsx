import style from './index.module.css';
import styleIndex from '../../index.module.css';

import logoFooter from "../../assets/svg/logo-footer.svg";
import githubIcon from "../../assets/svg/github-icon-footer.svg";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className={style.footer_bg}>
        <div className={`${style.footer} ${styleIndex.container}`}>
            <Link to="/"><img src={logoFooter} alt="Logo Innova AutoCare"/></Link>
            <div className={style.footer_contato}>
                <h3>Contato</h3>
                <ul>
                    <li><a href="tel:+55119999999999">+55 11 99999-99999</a></li>
                    <li><a href="mailto:contato@innovaautocare.com.br">contato@innovaautocare.com</a></li>
                    <li>Av. Paulista, 1106 - Bela Vista</li>
                    <li>São Paulo - SP</li>
                </ul>
                <div className={style.footer_redes}>
                    <a href="https://github.com/InnovaAutoCare/autocare" target="_blank"><img src={githubIcon} alt="Icone GitHub"/></a>
                </div>
            </div>
            <div className={style.footer_informacoes}>
                <h3>Informações</h3>
                <nav>
                    <ul>
                        <li><Link to="/#sobre-serviço">Diferenciais</Link></li>
                        <li><Link to="/#como-funciona">Como funciona</Link></li>
                        <li><Link to="/integrantes">Quem somos nós</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={style.footer_copy}>
                <p>InnovaTech ® Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
 
    </>
  )
}

export default Footer;