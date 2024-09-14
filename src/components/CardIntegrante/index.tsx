import './index.css';

function CardIntegrante(props:{
    foto: string,
    nome: string,
    rm: string,
    linkGithub: string,
    linkLinkedin: string
}) {
  return (
    <>
        <li className="card_integrante">
            <img src={props.foto} alt="" className="profile-pic"/>
            <h3>{props.nome}</h3>
            <p>{props.nome}</p>
            <div className="redes-integrantes">
                <a href={props.linkGithub} target="_blank"><img src="assets/svg/github-icon-integrantes.svg" alt="Logo Github"/></a>
                <a href={props.linkLinkedin} target="_blank"><img src="assets/svg/linkedin-icon-integrantes.svg" alt="Logo LinkedIn"/></a>
            </div>
        </li>
    </>
  )
}

export default CardIntegrante;