import { useEffect, useState } from "react";

import * as Component from "../styles/components/Header";

import menuMobileIcon from "../assets/mobile/header/drawer.svg";
import logoIcon from "../assets/mobile/header/log.svg";
import searchIcon from "../assets/mobile/header/header.svg";
import minicartIcon from "../assets/mobile/header/minicart.v2.svg";
import userIcon from "../assets/mobile/header/icon-user.svg";
import heartIcon from "../assets/mobile/header/icon-heart.svg";

import Minicart from "./Minicart";
import Menu from "./Menu";
import TopHeader from "./TopHeader";

interface WindowProps {
    scrollY: number;
}

const Header = ()=>{
    const [ action, setAction ] = useState(false);
    const [ openSearch, setOpenSearch ] = useState(false);
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ windowMove, setWindowMove ] = useState(false);
    const [ search, setSearch ] = useState("");

    useEffect(()=>{
        window.onscroll = function(){
            const position:WindowProps = this as WindowProps;

            if(position.scrollY > 0){
                setWindowMove(true);
            } else {
                setWindowMove(false);
            }
            
        }    
    },[]);

    function handlerMinicart(){
        setAction(!action);
    }

    function handlerOpenSearch(){
        setOpenSearch(!openSearch)
    }

    function handlerOpenMenu(){
        setOpenMenu(!openMenu);
    }

    return(
        <>
            <TopHeader />
            <Component.Container
                move={windowMove}
            >
                <Component.FistLine
                    move={windowMove}
                >
                    <div className="left-area">
                        <span onClick={handlerOpenMenu}>
                            <img src={menuMobileIcon} alt="Menu Burger Icon" />
                        </span>
                        <div className="area-logo">
                            <a href="/">
                                <img src={logoIcon} alt="Logo Ecommerce" />
                            </a>
                        </div>
                        <div className={`area-search ${openSearch ? 'active' : ''}`}>
                            <form>
                                <fieldset>
                                    <input 
                                        type="text" 
                                        name="search header" 
                                        id="search"
                                        placeholder="O Que Você Busca?"
                                        value={search}
                                        onChange={(e)=>{setSearch(e.target.value)}}
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
                            className="account-button"

                        >
                            <img src="" alt="Account Icon" />
                            Minha Conta
                        </span>
                        <span
                            className="Wishlist-button"
                        >
                            <img src="" alt="Wishlist Icon" />
                            Wishlist
                        </span>
                        <span 
                            className="bag-button"
                            onClick={handlerMinicart}
                        >
                            <img src={minicartIcon} alt="search Icon" />
                            Meu Carrinho
                        </span>
                    </div>
                </Component.FistLine>
                <Component.SecondLine
                    active={openMenu}
                >
                    <div className="header-menu">
                        <span 
                            className="close-btn"
                            onClick={handlerOpenMenu}
                        >X</span>
                    </div>
                    <Menu />
                    <div className="footer-menu">
                        <a href="/account">
                            <img 
                                src={userIcon} 
                                alt="User Icon" 
                            />
                            Login
                        </a>
                        <span>
                            <img 
                                src={heartIcon} 
                                alt="Heart Icon" 
                            />
                            Wishlist
                        </span>
                    </div>
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
