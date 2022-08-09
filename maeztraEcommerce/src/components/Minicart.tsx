import { useState } from "react";
import * as Component from "../styles/components/Minicart";

type MinicartPros = {
    action: boolean;
    handlerMinicart: ()=>void;
}

const Minicart = ({ action, handlerMinicart }: MinicartPros)=>{
    return(
        <Component.Container className={action ? 'active' : ''}>
            <div className="ecn-lightbox-content">
                <div className="header">
                    <span 
                        className="close-btn"
                        onClick={handlerMinicart} 
                    >X</span>
                    <span className="title">minha sacola</span>
                    <span className="counter">0</span>
                </div>
                <div className="main">
                    <div className="content-products">

                    </div>
                </div>
                <div className="footer">
                    <section className="calculation-area">
                        <div className="sub-total">
                            <span>subtotal</span>
                            <strong>R$ 0.00</strong>
                        </div>
                        <div className="shipping-area">
                            <span>frete</span>
                            <form>
                                <fieldset>
                                    <input type="text" name="cep" id="cep" placeholder="CEP" />
                                    <button>OK</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="total">
                            <span>subtotal</span>
                            <strong>R$ 0.00</strong>
                        </div>
                    </section>
                    <section className="button-area">
                        <button className="more">Voltar a comprar</button>
                        <button className="checkout">Finalizar compra</button>
                    </section>
                </div>
            </div>
        </Component.Container>
    );    
}

export default Minicart;
