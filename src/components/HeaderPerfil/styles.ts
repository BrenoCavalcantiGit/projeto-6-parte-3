import styled from 'styled-components'
import { cores } from '../../styles'

export const Barra = styled.header`
  background-color: ${cores.secundaria};
  padding: 40px 0;

  > div {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  a,
  button {
    font-size: 18px;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    a,
    button {
      font-size: 12px;
    }
  }
`

export const AbrirCarrinho = styled.button`
  background: none;
  border: none;
  color: ${cores.principal};
  text-align: right;
  cursor: pointer;
`
