import { useState, useEffect, FormEvent } from "react";

import * as Components from "../styles/components/PopNews";

import { useNewsletter } from "../hooks/useNewsletter";

import bgPop from "../assets/main/bg-newsletter.png";
import mailIcon from "../assets/main/newsletter-mail-icon.svg";
import envyIcon from "../assets/main/envy.svg";

const PopNews = ()=>{
    const [ email, setEmail ] = useState("");
    const [ activePop, setActivePop ] = useState(false);
    const objNewsletter = useNewsletter;

    useEffect(()=>{
        const bodyHome = document.querySelector("body")?.classList.contains("home");

        if(bodyHome){
            setTimeout(() => {
                if (localStorage.getItem("@maeztra-expires") !== 'true') {
                    setActivePop(true);
                } else {
                    setActivePop(false);
                }
            }, 10000);
        }
    },[]);

    function handleClosePop(){
        localStorage.setItem("@maeztra-expires", 'true');
        setActivePop(false);
    }

    function handlePopEmailSend(e:FormEvent){
        e.preventDefault();
        setActivePop(false);
        objNewsletter.clickPopUp(email);
    }

    return(
        <Components.Container 
            className={activePop ? "active":""}
            onClick={handleClosePop}
        >
            <section id="bodyu-PopUp">
                <div className="header">
                    <span 
                        className="close-btn-pop"
                        onClick={handleClosePop}
                    >fechar</span>
                </div>
                <div className="body">
                    <div className="area-left">
                        <img src={bgPop} alt="Image Newsletter"/>
                    </div>
                    <div className="area-right">
                        <div className="first-block">
                            <img src={mailIcon} alt="Mail Icon"/>
                            <span>Bem vindo à maeztra</span>
                        </div>
                        <div className="second-block">
                            <span>Receba em Primeira mão</span>
                            <strong>desconto e ofertas exclusivas</strong>
                        </div>
                        <form action="" onSubmit={handlePopEmailSend}>
                            <fieldset>
                                <input 
                                    type="email" 
                                    name="email-pop" 
                                    id="email-pop" 
                                    placeholder="Digite seu e-mail"
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                                <button 
                                    id="pop-up-btn"
                                    type="submit"
                                >
                                    <span>Enviar</span>
                                    <img src={envyIcon} alt="Send Icon" />
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </Components.Container>
    );
}

export default PopNews;