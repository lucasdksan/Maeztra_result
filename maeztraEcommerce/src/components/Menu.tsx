import * as Component from "../styles/components/Menu";

import dressIcon from "../assets/mobile/header/icon-dress.svg";

const Menu = ()=>{
    return(
        <Component.Container>
            <ul>
                <li>
                    <img src={dressIcon} alt="Icon Dress" />
                    <a href="/novidades">Novidades</a>
                </li>
                <li>
                    <a href="/vestidos">Vestidos</a>
                </li>
                <li>
                    <a href="/roupas">Roupas</a>
                </li>
                <li>
                    <a href="/sapatos">Sapatos</a>
                </li>
                <li>
                    <a href="/lingerie">Lingerie</a>
                </li>
                <li>
                    <a href="/acessorios">Acessórios</a>
                </li>
                <li>
                    <a href="/outlet">OUTLET</a>
                </li>
            </ul>
        </Component.Container>
    );
}

export default Menu;