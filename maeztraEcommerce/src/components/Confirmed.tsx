import { useContext } from "react";

import * as Component from "../styles/components/Confirmed";

import { ConfirmedContext } from '../contexts/ConfirmedBuy';

type ConfirmedProp = {
    isConfirmedBuyOpen: boolean;
}

const Confirmed = ({isConfirmedBuyOpen}: ConfirmedProp)=>{
    
    const { closeConfirmedBuy } = useContext(ConfirmedContext);

    return(
        <Component.Container active={isConfirmedBuyOpen}>
            <button onClick={closeConfirmedBuy}>
                <span>Item adicionado ao seu carrinho</span>
                <strong>X</strong>
            </button>
        </Component.Container>
    );
}

export default Confirmed;