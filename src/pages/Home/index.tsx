import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import Food from '../../models/Food'

//* import Comidas
import sushi from '../../assets/hioki_sushi.svg'
import trattoria from '../../assets/vita_trattoria.svg'

const maisVendidos: Food[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    rate: '4.9',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    link: '/produtos/hioki_sushi'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: ['Italiana'],
    image: trattoria,
    link: '/produtos/vita_trattoria'
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: ['Italiana'],
    image: trattoria,
    link: '/produtos/vita_trattoria'
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: ['Italiana'],
    image: trattoria,
    link: '/produtos/vita_trattoria'
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: ['Italiana'],
    image: trattoria,
    link: '/produtos/vita_trattoria'
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: ['Italiana'],
    image: trattoria,
    link: '/produtos/vita_trattoria'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList foods={maisVendidos} cardType="home" />
  </>
)

export default Home
