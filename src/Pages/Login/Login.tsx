import style from './login.module.css'
import styleIndex from '../../index.module.css'

import logo from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom';
import LoginButton from '../../components/LoginButton'
import appleIcon from '../../assets/svg/apple-icon.svg'
import googleIcon from '../../assets/svg/google-icon.svg'
import facebookIcon from '../../assets/svg/facebook-icon.svg'

function Login() {
  return (
    <>
        <section className={`${styleIndex.main_form} ${styleIndex.container}`}>
            <Link to='/'><img src={logo} alt="" className={styleIndex.logo_form}/></Link>
            <h3>Bem-vindo de volta!</h3>
            <p className={styleIndex.subtitulo_form}>Por favor, insira seus dados de login</p>
            <ul className={style.logar_com}>
                <LoginButton img={appleIcon}/>
                <LoginButton img={googleIcon}/>
                <LoginButton img={facebookIcon}/>
            </ul>
            <p className={style.decorativo_form}>OU</p>
            <form action="">
                <div className={styleIndex.inputs}>
                    <label htmlFor="">Email ou Telefone</label>
                    <input type="text"/>
                </div>
                <div className={styleIndex.inputs}>
                    <label htmlFor="idSenha">Senha</label>
                    <input type="password" id={styleIndex.idSenha} name="txtSenha"/>
                </div>
                <div className={style.opcoes_senha}>
                    <div className={styleIndex.lembrar_senha}>
                        <input type="checkbox"/>
                        <p>Lembrar minha senha</p>
                    </div>
                    <a href="">Esqueci minha senha</a>
                </div>
                <button className={styleIndex.button}>LOGIN</button>
                <p className={style.criar_conta}>Não tem uma conta? <Link to="/cadastro">Criar conta</Link></p>
            </form>
        </section>
    </>
  )
}

export default Login;
