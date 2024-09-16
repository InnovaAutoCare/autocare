import './index.css'

function LoginButton(props: {
    img: string
}) {
  return (
    <>
       <li><a href=""><img src={props.img} alt=""/></a></li>
    </>
  )
}

export default LoginButton;