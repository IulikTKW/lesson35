import { useContext, useEffect } from "react";
import Card from "../../components/Card";
import Typography from "../../components/Typography";

import './styles.css'
import { ProductContext } from "../../context/productContext";

const ShopPage = () => {
    const {products, getProducts} = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Typography>Shop</Typography>
            <div className="product-list">
                {products.map(({ title, price, img, id }) => {
                    return <Card
                        key={title}
                        title={title}
                        price={price}
                        img={img}
                        id={id}
                    />
                })}
            </div>
        </div>
    )
}

export default ShopPage;