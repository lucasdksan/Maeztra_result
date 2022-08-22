import mainMobileBanner from "../assets/main/Banner-Mobile.png";
import nextArrow from "../assets/main/_icon-next.svg";
import prevArrow from "../assets/main/_icon-prev.svg";

export interface PartnerBrandsProps {
    path: string;
    title: string;
}

export const objArrows = {
    next: nextArrow,
    prev: prevArrow
}

export const arryPartnerBanner = [
    {
        path: mainMobileBanner,
        title: "First Mobile Banner"
    },
    {
        path: mainMobileBanner,
        title: "Others Mobile Banner"
    },
    {
        path: mainMobileBanner,
        title: "Dad Mobile Banner"
    },
    {
        path: mainMobileBanner,
        title: "Mom Mobile Banner"
    },
    {
        path: mainMobileBanner,
        title: "Last Mobile Banner"
    },
];