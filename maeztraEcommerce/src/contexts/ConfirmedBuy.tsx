import React, { createContext, useState, ReactNode } from 'react';

import Confirmed from '../components/Confirmed';

type childrenConfirmed = {
    children: ReactNode;
}

type unityProduct = {
    name: string,
    value: string,
    image: string;
    color?: string;
}
interface ConfirmedProps {
    product: number;
    unituProducts: unityProduct[];
    ProductUp: () => void; 
    closeConfirmedBuy: ()=> void;
    SetProductsListAdd: (productItem: unityProduct)=> void;
}

export const ConfirmedContext = createContext({} as ConfirmedProps);

export const ConfirmedProvider = ({ children }:childrenConfirmed )=>{
    const [ product, setProduct ] = useState(0);
    const [ unituProducts, setUnituProducts ] = useState<unityProduct[]>([]);
    const [ isConfirmedBuyOpen, setIsConfirmedBuyOpen ] = useState(false);

    function ProductUp(){
        setProduct(1 + product);
        setIsConfirmedBuyOpen(true);
    }
    function closeConfirmedBuy(){
        setIsConfirmedBuyOpen(false);
    }
    function SetProductsListAdd(productItem: unityProduct){
        setUnituProducts([...unituProducts, {
            name: productItem.name,
            value: productItem.value,
            image: productItem.image,
            color: productItem?.color
         }]);
    }
    
    return (
        <ConfirmedContext.Provider
            value={{
                product,
                unituProducts,
                ProductUp,
                closeConfirmedBuy,
                SetProductsListAdd
            }}
        >
            { children }
            { isConfirmedBuyOpen && <Confirmed isConfirmedBuyOpen={isConfirmedBuyOpen}/> }
        </ConfirmedContext.Provider>
    );
}