import { useGetRestaurantesQuery } from '../services/api'

const useRestaurantes = () => {
  const { data, isLoading, isError } = useGetRestaurantesQuery()

  return {
    restaurantes: data ?? [],
    carregando: isLoading,
    erro: isError
  }
}

export default useRestaurantes
