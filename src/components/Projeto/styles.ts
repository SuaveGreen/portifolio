import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.CorBotao};
  font-size: 14px;
  padding: 8px 8px 8px 0;
  display: inline-block;
  margin-top: 24px;

  svg {
    margin-left: 8px;
  }
`
