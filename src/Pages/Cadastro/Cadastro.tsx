import { useState, useRef, useEffect } from 'react';
import style from './cadastro.module.css';
import styleIndex from '../../index.module.css';
import logo from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

function Cadastro() {

  const [activeForm, setActiveForm] = useState<'cliente' | 'parceiro'>('cliente');

  const btnColorRef = useRef<HTMLDivElement>(null);
  const formClienteRef = useRef<HTMLFormElement>(null);
  const formParceiroRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (btnColorRef.current) {
      if (activeForm === 'cliente') {
        btnColorRef.current.style.left = "0px";
        btnColorRef.current.style.width = "132px";
        document.getElementById(style.cadastro_cliente)?.style.setProperty('color', 'white');
        document.getElementById(style.cadastro_parceiro)?.style.setProperty('color', 'black');
      } else {
        btnColorRef.current.style.left = "122px";
        btnColorRef.current.style.width = "150px";
        document.getElementById(style.cadastro_cliente)?.style.setProperty('color', 'black');
        document.getElementById(style.cadastro_parceiro)?.style.setProperty('color', 'white');
      }
    }

    if (formClienteRef.current && formParceiroRef.current) {
      if (activeForm === 'cliente') {
        formClienteRef.current.style.display = "block";
        formParceiroRef.current.style.display = "none";
      } else {
        formClienteRef.current.style.display = "none";
        formParceiroRef.current.style.display = "block";
      }
    }
  }, [activeForm]);

  return (
    <>
      <section className={`${styleIndex.main_form} ${styleIndex.container}`}>
        <div className={style.form_switch_buttons}>
          <div className={style.switch_buttons_color} ref={btnColorRef}></div>
          <button
            id={style.cadastro_cliente}
            onClick={() => setActiveForm('cliente')}
            className={activeForm === 'cliente' ? style.active : ''}
          >
            Cadastro cliente
          </button>
          <button
            id={style.cadastro_parceiro}
            onClick={() => setActiveForm('parceiro')}
            className={activeForm === 'parceiro' ? style.active : ''}
          >
            Cadastro parceiros
          </button>
        </div>

        <Link to="/"><img src={logo} alt="" className={styleIndex.logo_form} /></Link>
        <h3>Cadastro</h3>
        <p className={styleIndex.subtitulo_form}>Complete com seus dados para criar sua conta</p>

        <form action="" id={style.form_cadastrar_cliente} className={style.form_cadastro} ref={formClienteRef}>
          <div className={style.nome_inputs}>
            <div className={styleIndex.inputs}>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="João" />
            </div>
            <div className={styleIndex.inputs}>
              <label htmlFor="">Sobrenome</label>
              <input type="text" placeholder="da Silva" />
            </div>
          </div>
          <div className={styleIndex.inputs}>
            <label htmlFor="idCpf">CPF</label>
            <input
              type="text"
              id="idCpf"
              placeholder="XXX.XXX.XXX-XX"
              required
              minLength={14}
              maxLength={14}
              name="txtCpf"
              onChange={(e) => {
                let cpf = e.target.value;
                cpf = cpf.replace(/\D/g, "");
                cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
                cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
                cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                e.target.value = cpf;
              }}
            />
          </div>
          <div className={styleIndex.inputs}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="exemplo@email.com" />
          </div>
          <div className={styleIndex.inputs}>
            <label htmlFor="idSenha">Senha</label>
            <input type="password" id="idSenha" name="txtSenha" placeholder="************" />
          </div>
          <div className={styleIndex.inputs}>
            <label htmlFor="idConfSenha">Confirmar Senha</label>
            <input type="password" id="idConfSenha" name="txtConfSenha" placeholder="************" />
          </div>
          <button className={`${styleIndex.button} ${style.cadastrar}`}>CRIAR CONTA</button>
        </form>

        <form action="" id={style.form_cadastrar_parceiro} className={style.form_cadastro} ref={formParceiroRef}>
          <div className={styleIndex.inputs}>
            <label htmlFor="">Categoria</label>
            <select name="" id="">
              <option></option>
              <option>Oficina</option>
              <option>Autopeça</option>
            </select>
          </div>
          <div className={styleIndex.inputs}>
            <label htmlFor="">Nome Fantasia</label>
            <input type="text" placeholder="ConsertosMax" />
          </div>
          <div className={styleIndex.inputs}>
            <label htmlFor="idCnpj">CNPJ</label>
            <input
              type="text"
              id="idCnpj"
              placeholder="XX.XXX.XXX/0001-XX"
              required
              minLength={18}
              maxLength={18}
              name="txtCnpj"
              onChange={(e) => {
                let cnpj = e.target.value;
                cnpj = cnpj.replace(/\D/g, "");
                cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2");
                cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2");
                cnpj = cnpj.replace(/(\d{3})(\d)/, "$1/$2");
                cnpj = cnpj.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
                e.target.value = cnpj;
              }}
            />
          </div>
          <div className={styleIndex.inputs}>
            <label htmlFor="">Email</label>
            <input type="email" id="idEmail" placeholder="exemplo@email.com" />
          </div>
          <div className={styleIndex.inputs}>
            <label htmlFor="idSenhaLoja">Senha</label>
            <input type="password" id="idSenhaLoja" name="txtSenhaLoja" placeholder="************" />
          </div>
          <div className={styleIndex.inputs}>
            <label htmlFor="idConfSenhaLoja">Confirmar senha</label>
            <input type="password" id="idConfSenhaLoja" name="txtConfSenhaLoja" placeholder="************" />
          </div>
          <button className={`${styleIndex.button} ${style.cadastrar}`}>CRIAR CONTA</button>
        </form>
      </section>
    </>
  );
}

export default Cadastro;
