import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projetos from './containers/Projetos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
