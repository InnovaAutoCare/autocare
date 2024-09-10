import './index.css';

function Button(props:{
    conteudo: string;
}) {
  return (
    <>
      <button className="button">{props.conteudo}</button>
    </>
  )
}

export default Button;