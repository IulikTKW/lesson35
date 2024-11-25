import CartIcon from '../../assets/shopping-cart-add.png';
import ArrowRight from '../../assets/angle-right.png';
import ArrowLeft from '../../assets/angle-left.png';

import './styles.css'

const iconSize = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl',
}

const iconName = {
    cart: CartIcon,
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight
}

const Icon = ({name, size}) => {
    return (
        <img src={iconName[name]} className={iconSize[size]} alt={name}/>
    )
}

export default Icon;

