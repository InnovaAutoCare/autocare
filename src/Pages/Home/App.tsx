import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './App.css'

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
      <Footer/>
    </>
  )
}

export default App
