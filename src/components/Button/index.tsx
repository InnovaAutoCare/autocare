
import style from './index.module.css'

function Button(props:{
    conteudo: string;
}) {
  return (
    <>
      <button className={style.button}>{props.conteudo}</button>
    </>
  )
}

export default Button;