import * as Component from "../styles/components/ProductMinicart";
import { ConfirmedContext } from "../contexts/ConfirmedBuy";

import trashIcon from "../assets/main/trash.svg";
import { useContext } from "react";

type ProductMinicart = {
    product: {
        color: string;
        image: string;
        name: string;
        value: string;
    };
    numberElement: number;
};

const ProductMinicart = ({ product, numberElement }:ProductMinicart)=>{
    const { 
            ProductDown, 
            RemoveProduct
        } = useContext(ConfirmedContext);

    function handlerRemoveProoduct(key: number) {
        ProductDown();
        RemoveProduct(key);
    }

    return(
        <Component.Container bg={product.color}>
            <div className="container">
                <img src={product.image} alt="image product"/>
                <div className="content">
                    <span>{product.name}</span>
                    <strong>{product.value}</strong>
                    <span className="color"></span>
                </div>
            </div>
            <button onClick={()=>{handlerRemoveProoduct(numberElement)}}>
                <img src={trashIcon} alt="Trash Icon" />
            </button>
        </Component.Container>
    );
}

export default ProductMinicart;