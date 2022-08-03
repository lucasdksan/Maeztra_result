import { useState } from "react";

import * as Component from "../styles/components/Header";

import TopHeader from "./TopHeader";

import menuMobileIcon from "../assets/mobile/header/drawer.svg";
import logoIcon from "../assets/mobile/header/log.svg";
import searchIcon from "../assets/mobile/header/header.svg";
import minicartIcon from "../assets/mobile/header/minicart.v2.svg";
import Minicart from "./Minicart";
import Menu from "./Menu";

const Header = ()=>{
    const [ action, setAction ] = useState(false);
    const [ openSearch, setOpenSearch ] = useState(false);

    function handlerMinicart(){
        setAction(!action);
    }

    function handlerOpenSearch(){
        setOpenSearch(!openSearch)
    }

    return(
        <>
            <TopHeader />
            <Component.Container>
                <Component.FistLine>
                    <div className="left-area">
                        <span>
                            <img src={menuMobileIcon} alt="Menu Burger Icon" />
                        </span>
                        <div className="area-logo">
                            <img src={logoIcon} alt="Logo Ecommerce" />
                        </div>
                        <div className={`area-search ${openSearch ? 'active' : ''}`}>
                            <form>
                                <fieldset>
                                    <input 
                                        type="text" 
                                        name="search header" 
                                        id="search"
                                        placeholder="O Que Você Busca?"
                                    />
                                    <button type="submit"><span>Buscar</span></button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="right-area">
                        <span 
                            className="search-button"
                            onClick={handlerOpenSearch}
                        >
                            <img src={searchIcon} alt="search Icon" />
                        </span>
                        <span 
                            className="bag-button"
                            onClick={handlerMinicart}
                        >
                            <img src={minicartIcon} alt="search Icon" />
                        </span>
                    </div>
                </Component.FistLine>
                <Component.SecondLine>
                    <Menu />
                </Component.SecondLine>
            </Component.Container>
            <Minicart 
                action={action}
                handlerMinicart={handlerMinicart}
            />
        </>
    );
}

export default Header;