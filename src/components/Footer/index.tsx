import './index.css';
import logoFooter from "../../assets/svg/logo-footer.svg";
import githubIcon from "../../assets/svg/github-icon-footer.svg";

function Footer() {
  return (
    <>
      <footer className="footer-bg">
        <div className="footer container">
            <a href="index.html"><img src={logoFooter} alt="Logo Innova AutoCare"/></a>
            <div className="footer-contato">
                <h3>Contato</h3>
                <ul>
                    <li><a href="tel:+55119999999999">+55 11 99999-99999</a></li>
                    <li><a href="mailto:contato@innovaautocare.com.br">contato@innovaautocare.com</a></li>
                    <li>Av. Paulista, 1106 - Bela Vista</li>
                    <li>São Paulo - SP</li>
                </ul>
                <div className="footer-redes">
                    <a href="https://github.com/ViniciusLABernardes/innovatech" target="_blank"><img src={githubIcon} alt="Icone GitHub"/></a>
                </div>
            </div>
            <div className="footer-informacoes">
                <h3>Informações</h3>
                <nav>
                    <ul>
                        <li><a href="#sobre-serviço">Diferenciais</a></li>
                        <li><a href="#como-funciona">Como funciona</a></li>
                        <li><a href="integrantes.html">Quem somos nós</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-copy">
                <p>InnovaTech ® Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
 
    </>
  )
}

export default Footer;