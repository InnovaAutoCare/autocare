import './index.css';
import githubIcon from '../../assets/svg/github-icon-integrantes.svg'
import linkedinIcon from '../../assets/svg/linkedin-icon-integrantes.svg'

function CardIntegrante(props:{
    foto: string,
    nome: string,
    rm: string,
    turma: string,
    linkGithub: string,
    linkLinkedin: string
}) {
  return (
    <>
        <li className="card_integrante">
            <img src={props.foto} alt="" className="profile-pic"/>
            <h3>{props.nome}</h3>
            <p>{props.nome} - {props.turma}</p>
            <div className="redes-integrantes">
                <a href={props.linkGithub} target="_blank"><img src={githubIcon} alt="Logo Github"/></a>
                <a href={props.linkLinkedin} target="_blank"><img src={linkedinIcon} alt="Logo LinkedIn"/></a>
            </div>
        </li>
    </>
  )
}

export default CardIntegrante;