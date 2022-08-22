import productPD1 from "../assets/main/pd1.png";
import productPD2 from "../assets/main/pd2.png";

export interface ProductProps {
    path: string;
    name: string;
    descripton: string;
    value: string;
    link: string;
    colors: string[];
}

export const arryProduct = [
    {
        path: productPD2,
        name: "Faux Suede Mini Skirt",
        descripton: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
        value: "R$ 500,00",
        link: "/product/Faux",
        colors: [
            "#DEAC71",
            "#D37164",
            "#6497D3",
            "#3C3B79"
        ],
    },
    {
        path: productPD1,
        name: "Ruched Rose Print Mini Skirt",
        descripton: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
        value: "R$ 320,00",
        link: "/product/Ruched",
        colors: [
            "#1C1A19",
            "#D84E4B",
            "#CFC9B0",
            "#EAE9E5"
        ],
    },
    {
        path: productPD2,
        name: "Faux Suede Mini Skirt",
        descripton: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
        value: "R$ 500,00",
        link: "/product/Faux",
        colors: [
            "#DEAC71",
            "#D37164",
            "#6497D3",
            "#3C3B79"
        ],
    },
    {
        path: productPD1,
        name: "Ruched Rose Print Mini Skirt",
        descripton: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
        value: "R$ 320,00",
        link: "/product/Ruched",
        colors: [
            "#1C1A19",
            "#D84E4B",
            "#CFC9B0",
            "#EAE9E5"
        ],
    },
    {
        path: productPD2,
        name: "Faux Suede Mini Skirt",
        descripton: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
        value: "R$ 500,00",
        link: "/product/Faux",
        colors: [
            "#DEAC71",
            "#D37164",
            "#6497D3",
            "#3C3B79"
        ],
    }
];