import ProductsList from '../../components/ProductList'
import Food from '../../models/Food'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const perfil: Food[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi ',
    rate: '4.9',
    infos: ['Destaque da semana', 'Japonesa'],
    image: resident,
    link: '/produtos/123' //* exemplo de link usando Link do ReactRouterDOM
  },
  {
    id: 2,
    description: '...',
    title: 'Resident Evil 4',
    rate: '6.0',
    infos: ['10%', '$250'],
    image: diablo,
    link: '/produtos/345'
  },
  {
    id: 3,
    description: '...',
    title: 'Resident Evil 4',
    rate: '7.0',
    infos: ['10%', '$250'],
    image: starWars,
    link: '/produtos/678'
  },
  {
    id: 4,
    description: '...',
    title: 'Resident Evil 4',
    rate: '8.0',
    infos: ['10%', '$250'],
    image: zelda,
    link: '/produtos/901'
  }
]

const Categories = () => (
  <>
    <ProductsList foods={perfil} />
  </>
)

export default Categories
