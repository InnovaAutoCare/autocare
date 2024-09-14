import style from './integrantes.module.css'
import styleIndex from '../../index.module.css'
import styleButton from '../../components/Button/index.module.css'

import githubIcon from '../../assets/svg/github-icon-footer.svg'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CardIntegrante from '../../components/CardIntegrante'
import edvanGithub from '../../assets/images/edvan-github.jpg'
import rafaelGithub from '../../assets/images/rafael-github.jpg'
import viniciusGithub from '../../assets/images/vinicius-github.jpg'


function Integrantes() {
  return (
    <>
      <Header />

      <section className={`${style.main_integrantes} ${styleIndex.container}`} aria-label="Integrantes">
        <h1>Equipe <span>Auto</span>Care</h1>
        <ul>
          <CardIntegrante
            foto={edvanGithub}
            nome='Edvan Davi'
            rm='RM554733'
            turma='Turma TDSPZ'
            linkGithub='https://github.com/edvxndxvi'
            linkLinkedin='https://www.linkedin.com/in/edvan-davi-119970236/'
          />
          <CardIntegrante
            foto={rafaelGithub}
            nome='Rafael Romanini'
            rm='RM55463'
            turma='Turma TDSPZ'
            linkGithub='https://github.com/rafaelromanini'
            linkLinkedin='https://www.linkedin.com/in/rafaelromanini/'
          />
          <CardIntegrante
            foto={viniciusGithub}
            nome='Vinícius Leandro'
            rm='RM554728'
            turma='Turma TDSPY'
            linkGithub='https://github.com/ViniciusLABernardes'
            linkLinkedin='https://www.linkedin.com/in/vinicius-leandro-de-araujo-bernardes-765a49254/'
          />
        </ul>
        <a href="https://github.com/InnovaAutoCare/autocare" className={`${styleButton.button} ${style.rep_link}`} target="_blank">Repositório Git<img src={githubIcon} alt="" /></a>
      </section>

      <Footer />
    </>
  )
}

export default Integrantes;
