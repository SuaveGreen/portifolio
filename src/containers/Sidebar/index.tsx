import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Pedro Caetano</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        suavegreen
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack Python
      </Descricao>
      <ThemeButton>Trocar Tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
