import style from './integrantes.module.css'
import styleIndex from '../../index.module.css'
import styleButton from '../../components/Button/index.module.css'

import githubIcon from '../../assets/svg/github-icon-footer.svg'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Integrantes() {
  return (
    <>
      <Header />

      <section className={`${style.main_integrantes} ${styleIndex.container}`} aria-label="Integrantes">
        <h1>Equipe <span>Auto</span>Care</h1>
        <ul>
        </ul>
        <a href="https://github.com/InnovaAutoCare/autocare" className={`${styleButton.button} ${style.rep_link}`} target="_blank">Repositório Git<img src={githubIcon} alt="" /></a>
      </section>

      <Footer />
    </>
  )
}

export default Integrantes;
