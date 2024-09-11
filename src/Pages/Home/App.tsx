import './App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import CardServico from '../../components/CardServico'
import diagnosticoIcon from '../../assets/svg/diagnostico-icon.svg'
import carteiraIcon from '../../assets/svg/carteira-icon.svg'
import consertoIcon from '../../assets/svg/conserto-icon.svg'


function App() {
  return (
    <>
      <Header/>
      <main className="container">
        <div className="texto-main">
            <h1>Uma nova maneira de <span>diagnosticar</span></h1>
            <p>Tenha o diagnóstico do problema do seu veículo de uma nova maneira.</p>
            <Button conteudo='CONHECER o SERVIÇO'/>
        </div>
        <div className="banner-main">
            <div className="imagem-main"></div>
        </div>
      </main>

      <section className="bg-servico" id="sobre-serviço" aria-label="Sobre o serviço">
        <div className="servico">
            <div className="texto-servico container">
                <h2 className="h2">Por que utilizar o <span>serviço AutoCare</span>?</h2>
                <p>Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos.</p>
            </div>
            <div className="cards-servico">
              <CardServico
                icon={diagnosticoIcon}
                titulo='Diagnóstico preciso e 100% online'
                texto='Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos.'
              />
              <CardServico
                icon={carteiraIcon}
                titulo='Saiba todos os detalhes do orçamento'
                texto='Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos.'
              />
              <CardServico
                icon={consertoIcon}
                titulo='Acompanhe em tempo real o status do conserto'
                texto='Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos.'
              />
            </div>
            <Button conteudo='CONHECER O SERVIÇO'/>
        </div>
      </section>

      <section className="como-funciona container" id="como-funciona" aria-label="Como funciona">
        <div className="titulo-como-funciona">
            <h2 className="h2">Resolva os seus problemas com apenas <span>4 passos</span> simples</h2>
        </div>
        <div className="img-como-funciona">
            <img src="assets/images/imagem-diferenciais.jpg" alt=""/>
        </div>
        <div className="conteudo-como-funciona">
            <div className="passo-a-passo">
            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default App
