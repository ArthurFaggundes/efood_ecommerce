import ProductListProfile from '../../components/ProductListProfile'
import Food from '../../models/Food'

// import trattoria from '../../assets/vita_trattoria.svg'
import marguerita from '../../assets/pizza_marguerita.svg'
import BannerFood from '../../components/BannerFood'
import HeaderProfile from '../../components/HeaderProfile'

const perfil: Food[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    rate: '0.0',
    infos: ['0'],
    image: marguerita,
    link: '/produtos/marguerita' //* exemplo de link usando Link do ReactRouterDOM
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    rate: '0.0',
    infos: ['0'],
    image: marguerita,
    link: '/produtos/marguerita' //* exemplo de link usando Link do ReactRouterDOM
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    rate: '0.0',
    infos: ['0'],
    image: marguerita,
    link: '/produtos/marguerita' //* exemplo de link usando Link do ReactRouterDOM
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    rate: '0.0',
    infos: ['0'],
    image: marguerita,
    link: '/produtos/marguerita' //* exemplo de link usando Link do ReactRouterDOM
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    rate: '0.0',
    infos: ['0'],
    image: marguerita,
    link: '/produtos/marguerita' //* exemplo de link usando Link do ReactRouterDOM
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    rate: '0.0',
    infos: ['0'],
    image: marguerita,
    link: '/produtos/marguerita' //* exemplo de link usando Link do ReactRouterDOM
  }
]

const Profile = () => (
  <>
    <HeaderProfile />
    <BannerFood />
    <ProductListProfile foods={perfil} cardType="profile" />
  </>
)

export default Profile
