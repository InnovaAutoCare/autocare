import './index.css';

function Passo(props: {
    decorativoClass: boolean,
    titulo: string,
    texto: string
}) {
  return (
    <>
        <div className={`passo ${props.decorativoClass ? 'decorativo' : ''}`}>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    </>
  )
}

export default Passo;