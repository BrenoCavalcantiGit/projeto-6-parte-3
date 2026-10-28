import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { Container } from '../../styles'
import { RootReducer } from '../../store'
import { abrir } from '../../store/reducers/carrinho'

import Logo from '../Logo'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.carrinho)

  return (
    <S.Barra>
      <Container>
        <Link to="/">Restaurantes</Link>
        <Link to="/">
          <Logo />
        </Link>
        <S.AbrirCarrinho type="button" onClick={() => dispatch(abrir())}>
          {itens.length} produto(s) no carrinho
        </S.AbrirCarrinho>
      </Container>
    </S.Barra>
  )
}

export default HeaderPerfil
