export interface FoodOption {
  id: number
  nome: string
  descricao: string
  porcao: string
  foto: string
  preco: number
}

export interface Restaurant {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: FoodOption[]
}
