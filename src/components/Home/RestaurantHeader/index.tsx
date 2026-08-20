import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../../assets/efood_logo.svg'
import smile from '../../../assets/smile.svg'
import coffee from '../../../assets/coffee.svg'
import users from '../../../assets/users.svg'
import cart from '../../../assets/shopping_bag.svg'

//! ================================== ATUALMENTE NÃO UTILIZADO ================================== !//

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/restaurant-menu">
              <img src={smile} alt="Mais vendidos" />
              Mais Vendidos
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">
              <img src={coffee} alt="Reserve sua mesa" />
              Reserve sua mesa
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">
              <img src={users} alt="Usuário - Perfil" />
              Perfil
            </Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      <img src={cart} alt="Shopping Cart" />
    </LinkCart>
  </HeaderBar>
)

//! ================================== ATUALMENTE NÃO UTILIZADO ================================== !//

export default Header
