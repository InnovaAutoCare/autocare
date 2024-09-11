import './index.css';

function CardServico(props: {
    icon: string,
    titulo: string,
    texto: string
}) {
  return (
    <>
        <div className="card-servico">
            <img src={props.icon} alt=""/>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    </>
  )
}

export default CardServico;