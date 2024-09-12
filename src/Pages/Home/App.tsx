import './App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import CardServico from '../../components/CardServico'
import diagnosticoIcon from '../../assets/svg/diagnostico-icon.svg'
import carteiraIcon from '../../assets/svg/carteira-icon.svg'
import consertoIcon from '../../assets/svg/conserto-icon.svg'
import Passo from '../../components/Passo'
import imgDiferenciais from '../../assets/images/imagem-diferenciais.jpg'
import Avaliacao from '../../components/Avaliacao'


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
            <img src={imgDiferenciais} alt=""/>
        </div>
        <div className="conteudo-como-funciona">
            <div className="passo-a-passo">
              <Passo
                decorativoClass={true}
                titulo='Conecte o App ao Bluetooth de seu veículo'
                texto='Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos. Nossa tecnologia inovadora simplifica processos '/>
              <Passo
                decorativoClass={true}
                titulo='Receba o orçamento detalhado e avalie se cabe no seu bolso'
                texto='Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos. Nossa tecnologia inovadora simplifica processos '/>
              <Passo
                decorativoClass={true}
                titulo='Agende com uma oficina próxima de sua escolha  '
                texto='Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos. Nossa tecnologia inovadora simplifica processos '/>
              <Passo
                decorativoClass={false}
                titulo='Seja atualizado pela oficina sobre quando seu carro ficará disponível para retirada'
                texto='Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos. Nossa tecnologia inovadora simplifica processos '/>
            </div>
        </div>
      </section>

      <section className="avaliacoes" aria-label="Avaliações">
        <h2 className="h2 container">Conheça a <span>opinião</span> de quem utilizou <br/>nosso <span>serviço</span></h2>
        <ul>
          <Avaliacao
            texto='Meu carro foi consertado rapidamente e o preço foi justo. Recomendo sem hesitar!'
            cardNumber={1}
            nome='Rodrigo Freitas'
            />
          <Avaliacao
            texto='Levei meu carro com um problema complicado e eles resolveram rapidamente. Além disso, me mantiveram informado durante todo o processo.'
            cardNumber={2}
            nome='João Pedro'
            />
          <Avaliacao
            texto='Eles realmente se importam com seus clientes e fazem de tudo para garantir que você saia satisfeito. Não troco a Innova Auto Care por nada!'
            cardNumber={3}
            nome='Regina Fonseca'
            />
        </ul>
      </section>

      <Footer/>
    </>
  )
}

export default App
