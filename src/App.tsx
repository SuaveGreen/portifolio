import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projetos from './containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [usandoDark, setUsandoDark] = useState(false)

  function trocaTema() {
    setUsandoDark(!usandoDark)
  }

  return (
    <ThemeProvider theme={usandoDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <About />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
