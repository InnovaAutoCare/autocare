import './index.css'

function LoginButton(props: {
    img: string
}) {
  return (
    <>
       <li className='loginButton'><a href=""><img src={props.img} alt=""/></a></li>
    </>
  )
}

export default LoginButton;