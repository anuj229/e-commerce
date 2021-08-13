import {Link} from 'react-router-dom'
import { useGlobalContext } from '../global/Context';
const Navbar = () => {
  const{shoppingCart} = useGlobalContext();

  const totalItems = shoppingCart.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">
      <a>E-Commerce</a>
          </Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <span  className="shoppingCart">
            <Link to="/cart">
              <i className="fas fa-cart-plus" style={{ color: "white" }}>
               
              </i>
            </Link>
          </span>

          <span
            className="cartCount"
            style={{ fontWeight: "bold" }}
          >
            {totalItems}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
