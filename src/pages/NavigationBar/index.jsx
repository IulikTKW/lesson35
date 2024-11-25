import { Link } from "react-router-dom";
import path from "../../constants";
import Icon from "../../components/Icon";

import './styles.css'

const NavigationBar = () => {
    return (
        <div className="nav-container">
            <div className="nav-list">
                <Link to={path.homePage} >HOME</Link>
                <Link to={path.shopPage} >SHOP</Link>
            </div>
            <Link to={path.cart}>
              <Icon name="cart" size="md" />
            </Link>
        </div>
    )
}

export default NavigationBar;