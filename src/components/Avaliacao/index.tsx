import './index.css';
import fullStar from '../../assets/svg/full-star-avaliacao.svg'

function Avaliacao(props: {
    texto: string,
    cardNumber: number,
    nome: string
}) {
  return (
    <>
        <li>
            <p>{props.texto}</p>
            <div className="pessoa">
                <div className={`imagem-pessoa avaliacao${props.cardNumber}`}>
                </div>
                <div className="dados-pessoa">
                    <h3>{props.nome}</h3>
                    <div className="avaliacao">
                        <img src={fullStar}/>
                        <img src={fullStar}/>
                        <img src={fullStar}/>
                        <img src={fullStar}/>
                        <img src={fullStar}/>
                    </div>
                </div>
            </div>
        </li >
    </>
  )
}

export default Avaliacao;