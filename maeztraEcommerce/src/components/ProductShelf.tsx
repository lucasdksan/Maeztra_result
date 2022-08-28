import { useContext, useState } from "react";

import { ProductProps } from "../data/products";

import * as Component from "../styles/components/ProductShelf";

import { ConfirmedContext } from '../contexts/ConfirmedBuy';

const ProductShelf = ({ colors, descripton, name, path, value, link }:ProductProps)=>{
    const { ProductUp, SetProductsListAdd } = useContext(ConfirmedContext);
    const [ colorSelected, setColorSelected ] = useState("");

    function BuyElement(){
        if(colorSelected !== ""){
            ProductUp();
            SetProductsListAdd({name, value, image: path, color:colorSelected});
        }
    }

    return(
        <Component.Container>
            <a className="image-content" href={link}>
                <img 
                    src={path} 
                    alt={name} 
                />
            </a>
            <div className="container">
                <div className="line-colors">
                    {
                        colors.map((e,k)=>{
                            return(
                                <button 
                                    key={k}
                                    style={{backgroundColor: e}}
                                    onClick={()=>{setColorSelected(e)}}
                                ></button>
                            );
                        })
                    }
                </div>
                <div className="content">
                    <span className="line-value">
                        {
                            value
                        }
                    </span>
                    <span className="line-name">
                        {
                            name
                        }
                    </span>
                    <p className="line-description">
                        {
                            descripton
                        }
                    </p>
                </div>
                <button 
                    className="add" 
                    title={link}
                    onClick={BuyElement}
                >Adicionar</button>
            </div>
        </Component.Container>
    );
}

export default ProductShelf;