import style from './login.module.css'
import styleIndex from '../../index.module.css'

import logo from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function Login() {
  return (
    <>
        <section className={`${style.main_form} ${styleIndex.container}`}>
            <Link to='/'><img src={logo} alt="" className={style.logo_form}/></Link>
            <h3>Bem-vindo de volta!</h3>
            <p className={style.subtitulo_form}>Por favor, insira seus dados de login</p>
            <ul className={style.logar_com}>
            </ul>
            <p className={style.decorativo_form}>OU</p>
            <form action="">
                <div className={style.inputs}>
                    <label htmlFor="">Email ou Telefone</label>
                    <input type="text"/>
                </div>
                <div className={style.inputs}>
                    <label htmlFor="idSenha">Senha</label>
                    <input type="password" id="idSenha" name="txtSenha"/>
                    <i className="fa-regular fa-eye-slash"></i>
                </div>
                <div className={style.opcoes_senha}>
                    <div className={style.lembrar_senha}>
                        <input type="checkbox"/>
                        <p>Lembrar minha senha</p>
                    </div>
                    <a href="">Esqueci minha senha</a>
                </div>
                <Button conteudo='LOGIN'/>
                <p className={style.criar_conta}>Não tem uma conta? <Link to="/cadastro">Criar conta</Link></p>
            </form>
        </section>
    </>
  )
}

export default Login;
