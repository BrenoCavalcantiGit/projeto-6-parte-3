import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Prato } from '../../models/Restaurante'

type CarrinhoState = {
  itens: Prato[]
  aberto: boolean
}

const initialState: CarrinhoState = {
  itens: [],
  aberto: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Prato>) => {
      state.itens.push(action.payload)
      state.aberto = true
    },
    remover: (state, action: PayloadAction<number>) => {
      const indice = state.itens.findIndex((p) => p.id === action.payload)

      if (indice >= 0) {
        state.itens.splice(indice, 1)
      }
    },
    abrir: (state) => {
      state.aberto = true
    },
    fechar: (state) => {
      state.aberto = false
    }
  }
})

export const { adicionar, remover, abrir, fechar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
