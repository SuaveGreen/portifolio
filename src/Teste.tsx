import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  color: ${(props) => (props.principal ? 'green' : 'red')};
  border-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '24px'};
  backgroun-color: transparent;
  border-radius: 8px;
  border: solid 2px;
  height: 45px;
  width: 150px;
  margin-right: 25px;
`

const BotaoPerigo = styled(Botao)`
  color: orange;
  border-color: orange;
`

function Teste() {
  return (
    <>
      <Botao principal>Aceitar</Botao>
      <Botao principal={false}>Recusar</Botao>
      <BotaoPerigo as="a" principal>
        <span>Não Clique Aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
