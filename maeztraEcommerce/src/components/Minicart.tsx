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
            </div>
        </Component.Container>
    );    
}

export default Minicart;