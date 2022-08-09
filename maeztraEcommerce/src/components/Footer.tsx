import { useState, FormEvent } from 'react';

import * as Component from '../styles/components/Footer';

import { useNewsletter } from "../hooks/useNewsletter";

import faceIcon from "../assets/mobile/footer/facebook.com.svg";
import instaIcon from "../assets/mobile/footer/instagram.svg";
import linkdIcon from "../assets/mobile/footer/Vector.svg";
import youtIcon from "../assets/mobile/footer/youtube.svg";
import maeztraIcon from "../assets/mobile/footer/maeztra.svg";
import vtexIcon from "../assets/mobile/footer/vtex.svg";
import visaIcon from "../assets/mobile/footer/visa.svg";
import masterIcon from "../assets/mobile/footer/mastercard.svg";

const Footer = ()=>{
    const [ shopping, setShopping ] = useState(false);
    const [ info, setInfo ] = useState(false);
    const [ account, setAccount ] = useState(false);
    const [ email, setEmail ] = useState("");
    const objNewsletter = useNewsletter;

    function handlerInfoActive(e:string){
        if(e === 'info'){
            setShopping(false);
            setAccount(false);
            setInfo(!info);
        } else if(e === 'account'){
            setShopping(false);
            setAccount(!account);
            setInfo(false);
        } else {
            setShopping(!shopping);
            setAccount(false);
            setInfo(false);
        }
    }

    function handleNewsEmailSend(e:FormEvent){
        e.preventDefault();
        objNewsletter.clickNewsletter(email);
    }

    return (
        <>
            <Component.Newsletter>
                <h3>Receba Nossa Newsletter</h3>
                <form action="" onSubmit={handleNewsEmailSend}>
                    <fieldset>
                        <input
                            type="email" 
                            name="email-news" 
                            id="newsEmail"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <button 
                            type="submit"
                        >Enviar</button>
                    </fieldset>
                </form>
            </Component.Newsletter>
            <Component.MoreInfo>
                <section>
                    <div className="title-area">
                        <span>Informações</span>
                        <span className="btn-plus info" onClick={()=>handlerInfoActive('info')}>+</span>
                    </div>
                    <ul id="info" className={info ? 'active' : ''}>
                        <li><a href="/quem-somos">Quem Somos</a></li>
                        <li><a href="/prazo">Prazo de Envio</a></li>
                        <li><a href="/trocas-devo">Trocas e Devoluções</a></li>
                        <li><a href="/promo">Promoções e Cupons</a></li>
                    </ul>
                </section>
                <section>
                    <div className="title-area">
                        <span>Minha Conta</span>
                        <span className="btn-plus account" onClick={()=>handlerInfoActive('account')}>+</span>
                    </div>
                    <ul id="account" className={account ? 'active' : ''}>
                        <li><a href="/account">Minha Conta</a></li>
                        <li><a href="/cart">Meus Pedidos</a></li>
                        <li><a href="/sign">Cadastre-se</a></li>
                    </ul>
                </section>
                <section>
                    <div className="title-area">
                        <span>Onde nos Encontrar</span>
                        <span className="btn-plus shopping" onClick={()=>handlerInfoActive('shopping')}>+</span>
                    </div>
                    <ul id="shopping" className={shopping ? 'active' : ''}>
                        <li><a href="/lojas">Lojas</a></li>
                        <li><a href="/endereco">Endereços</a></li>
                    </ul>
                </section>
            </Component.MoreInfo>
            <Component.Container>
                <div className="networks">
                    <a href="/facebook">
                        <img src={faceIcon} alt="Facebook Icon" />
                    </a>
                    <a href="/linkedin">
                        <img src={linkdIcon} alt="Linkedin Icon" />
                    </a>
                    <a href="/instagram">
                        <img src={instaIcon} alt="Instagram Icon" />
                    </a>
                    <a href="/youtube">
                        <img src={youtIcon} alt="Youtube Icon" />
                    </a>
                </div>
                <div className="pay-meths">
                    <img src={visaIcon} alt="Visa Icon" />
                    <img src={masterIcon} alt="Mastercard Icon" />
                    <img src={visaIcon} alt="Visa Icon" />
                    <img src={masterIcon} alt="Mastercard Icon" />
                </div>
                <div className="refe">
                    <span>
                        Powered by
                        <img src={vtexIcon} alt="Vtex Icon" />
                    </span>
                    <span>
                        Developed by
                        <img src={maeztraIcon} alt="Maeztra Icon" />
                    </span>
                </div>
            </Component.Container>
        </>
    );
}

export default Footer;