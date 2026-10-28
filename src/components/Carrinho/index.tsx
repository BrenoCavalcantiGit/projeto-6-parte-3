import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { RootReducer } from '../../store'
import { fechar, remover } from '../../store/reducers/carrinho'
import { formataPreco } from '../../utils'

const Carrinho = () => {
  const dispatch = useDispatch()
  const { itens, aberto } = useSelector((state: RootReducer) => state.carrinho)

  if (!aberto) return null

  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Overlay onClick={() => dispatch(fechar())}>
      <S.Barra onClick={(evento) => evento.stopPropagation()}>
        {itens.length > 0 ? (
          <>
            <S.Lista>
              {itens.map((item, indice) => (
                <S.Item key={`${item.id}-${indice}`}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <S.Lixeira
                    type="button"
                    aria-label={`Remover ${item.nome}`}
                    onClick={() => dispatch(remover(item.id))}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14H6L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4h6v2" />
                    </svg>
                  </S.Lixeira>
                </S.Item>
              ))}
            </S.Lista>
            <S.Total>
              <span>Valor total</span>
              <span>{formataPreco(valorTotal)}</span>
            </S.Total>
          </>
        ) : (
          <S.Vazio>
            O carrinho está vazio, adicione pelo menos um produto para
            continuar com a compra
          </S.Vazio>
        )}
        <S.Botao type="button" disabled={itens.length === 0}>
          Continuar com a entrega
        </S.Botao>
      </S.Barra>
    </S.Overlay>
  )
}

export default Carrinho
