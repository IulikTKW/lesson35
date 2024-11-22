import { Link } from "react-router-dom";
import path from "../../constants";



const NavigationBar = () => {
    return (
        <div>
            <Link to={path.homePage} >HOME</Link>
            <br />
            <Link to={path.shopPage} >SHOP</Link>
        </div>
    )
}

export default NavigationBar;