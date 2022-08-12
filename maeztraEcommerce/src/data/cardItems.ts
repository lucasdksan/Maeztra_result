export interface CardItemsProps {
    path: string;
    title: string;
    description: string;
}

import GlobooImg from "../assets/mobile/main/Globo.svg";
import garagemImg from "../assets/mobile/main/garagem.svg";
import tradyImg from "../assets/mobile/main/trady.svg";
import freeImg from "../assets/mobile/main/free.svg";
import carImg from "../assets/mobile/main/car.svg";

export const arryCardItems= [
    {
        path: GlobooImg,
        title: "Produtos importados",
        description: "Produtos de Alta Qualidade"
    },
    {
        path: garagemImg,
        title: "Estoque no Brasil",
        description: "Produtos mais pertos de você!"
    },
    {
        path: tradyImg,
        title: "Trocas Garantidas",
        description: "Trocas em até 48 horas, veja as regras"
    },
    {
        path: freeImg,
        title: "Ganhe 5% off",
        description: "Pagando à vista no Cartão"
    },
    {
        path: carImg,
        title: "Frete Grátis",
        description: "Em compras acima de R$ 499,00"
    }
];
