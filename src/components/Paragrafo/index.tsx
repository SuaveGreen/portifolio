import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Title = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Title
