export const priceFormat = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: FoodOption[]) => {
  return items.reduce((tempTotal, currentValue) => {
    return (tempTotal += currentValue.preco)
  }, 0)
}
