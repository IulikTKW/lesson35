import { useNavigate } from "react-router-dom";
import Typography from "../Typography";

import './styles.css'

const Card = ({title, img, price, id}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${id}`)

    }

    return (
        <div className="card-wrapper" onClick={handleClick}>
            <img src={img} alt={`${title} image`} className="card-img" />
            <Typography>{title}</Typography>
            <Typography>{price} $</Typography>
        </div>
    )
}

export default Card;