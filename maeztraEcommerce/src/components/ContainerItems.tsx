import { ReactNode } from "react";
import * as Component from "../styles/components/ContainerItems";

type ContainerItemsProps = {
    title: string;
    fontSize: number;
    children?: ReactNode;
}

const ContainerItems = ({ title, children, fontSize }: ContainerItemsProps)=>{
    return(
        <Component.Container>
            <span>{title}</span>
            {children}
        </Component.Container>
    );
}

export default ContainerItems;