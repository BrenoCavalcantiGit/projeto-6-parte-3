import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 900;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.73);
`

export const Barra = styled.aside`
  width: min(360px, 100%);
  height: 100%;
  overflow-y: auto;
  background-color: ${cores.principal};
  color: ${cores.fundo};
  padding: 32px 8px;
`

export const Lista = styled.ul`
  margin-bottom: 40px;
`

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  background-color: ${cores.secundaria};
  color: ${cores.principal};
  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    flex-shrink: 0;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
    color: ${cores.principal};
  }

  span {
    font-size: 14px;
    color: ${cores.principal};
  }
`

export const Lixeira = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${cores.principal};
  display: flex;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${cores.fundo};

  span {
    color: ${cores.fundo};
  }
`

export const Botao = styled.button`
  display: block;
  width: 100%;
  background-color: ${cores.secundaria};
  color: ${cores.principal};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Vazio = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  text-align: center;
  color: ${cores.fundo};
`
