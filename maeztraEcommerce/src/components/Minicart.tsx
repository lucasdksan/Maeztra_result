import { useState, useContext, FormEvent } from "react";
import * as Component from "../styles/components/Minicart";
import { useCep } from "../hooks/useCep";

import ProductMinicart from "./ProductMinicart";
import { ConfirmedContext } from "../contexts/ConfirmedBuy";

type MinicartPros = {
    action: boolean;
    handlerMinicart: ()=>void;
}

const Minicart = ({ action, handlerMinicart }: MinicartPros)=>{
    const { product, unituProducts, totalValue, subTotal, discount } = useContext(ConfirmedContext);
    const [cep, setCep] = useState('');
    console.log(product)
    console.log(unituProducts.length)

    function handleConfirmed(){
        window.location.href = "/checkout"
    }

    function handleCep(e:FormEvent){
        e.preventDefault();
        const value = useCep.identify(cep);

        discount(value as string);
    }

    return(
        <Component.Container className={action ? 'active' : ''}>
            <div className="ecn-lightbox-content">
                <div className="header">
                    <span 
                        className="close-btn"
                        onClick={handlerMinicart} 
                    >X</span>
                    <span className="title">minha sacola</span>
                    <span className="counter">{product}</span>
                </div>
                <div className="main">
                    <div className="content-products">
                        {
                            (product === 0 || unituProducts.length < 0) ? <span className="empty">Sacola Zerada</span> :
                            unituProducts.map((itens, key)=>{
                                return(
                                    <ProductMinicart 
                                        product={itens} 
                                        numberElement={key} 
                                        key={key}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="footer">
                    <section className="calculation-area">
                        <div className="sub-total">
                            <span>subtotal</span>
                            <strong>R$ {subTotal}</strong>
                        </div>
                        <div className="shipping-area">
                            <span>frete</span>
                            <form onSubmit={handleCep}>
                                <fieldset>
                                    <input 
                                        type="text" 
                                        name="cep" 
                                        id="cep" 
                                        placeholder="CEP"
                                        value={cep}
                                        onChange={(e)=>{setCep(e.target.value)}}
                                    />
                                    <button type="submit">OK</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="total">
                            <span>total</span>
                            <strong>R$ {totalValue()}</strong>
                        </div>
                    </section>
                    <section className="button-area">
                        <button 
                            onClick={handlerMinicart}
                            className="more">
                                Voltar a comprar
                        </button>
                        <button 
                            onClick={handleConfirmed} 
                            className="checkout"
                        >Finalizar compra</button>
                    </section>
                </div>
            </div>
        </Component.Container>
    );    
}

export default Minicart;
