import React, { createContext, useState, ReactNode } from 'react';

import Confirmed from '../components/Confirmed';

type childrenConfirmed = {
    children: ReactNode;
}

type unityProduct = {
    name: string,
    value: string,
    image: string;
    color: string;
}
interface ConfirmedProps {
    product: number;
    subTotal: number;
    unituProducts: unityProduct[];
    ProductUp: () => void;
    closeConfirmedBuy: () => void;
    SetProductsListAdd: (productItem: unityProduct) => void;
    ProductDown: () => void;
    RemoveProduct: (id: number) => void;
    totalValue: () => number;
    discount: (val: string) => void;
}

export const ConfirmedContext = createContext({} as ConfirmedProps);

export const ConfirmedProvider = ({ children }: childrenConfirmed) => {
    const [product, setProduct] = useState(0);
    const [unituProducts, setUnituProducts] = useState<unityProduct[]>([]);
    const [isConfirmedBuyOpen, setIsConfirmedBuyOpen] = useState(false);
    const [discountV, setDiscountV] = useState('');
    const [subTotal, setSubTotal] = useState(0);

    function ProductUp() {
        setProduct(1 + product);
        setIsConfirmedBuyOpen(true);
    }

    function discount(val: string){
        setDiscountV(val);
    }

    function totalValue(){
        var total:number = 0.00;
        unituProducts.forEach((element, key)=>{
            var [ or, valueR ] = element.value.split(' ');
            total = total + Number(valueR.replace(',','.'));
        });

        setSubTotal(total);

        if(discountV !== '' && total > 0){
            return total - Number(discountV.replace(',','.'));
        } else {
            return total;
        }
    }

    function ProductDown() {
        setProduct(product - 1);
    }

    function RemoveProduct(id: number){
        const filter = unituProducts.filter((item, k) => k !== id);
        setUnituProducts(filter);
    }

    function closeConfirmedBuy() {
        setIsConfirmedBuyOpen(false);
    }

    function SetProductsListAdd(productItem: unityProduct) {
        setUnituProducts([...unituProducts, {
            name: productItem.name,
            value: productItem.value,
            image: productItem.image,
            color: productItem.color
        }]);
    }

    return (
        <ConfirmedContext.Provider
            value={{
                product,
                subTotal,
                unituProducts,
                ProductUp,
                closeConfirmedBuy,
                SetProductsListAdd,
                ProductDown,
                RemoveProduct,
                totalValue,
                discount
            }}
        >
            {children}
            {isConfirmedBuyOpen && <Confirmed isConfirmedBuyOpen={isConfirmedBuyOpen} />}
        </ConfirmedContext.Provider>
    );
}