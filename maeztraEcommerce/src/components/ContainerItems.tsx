import { ReactNode } from "react";
import * as Component from "../styles/components/ContainerItems";

type ContainerItemsProps = {
    title: string;
    fontSize: number;
    children?: ReactNode;
}

const ContainerItems = ({ title, children, fontSize }: ContainerItemsProps)=>{
    return(
        <Component.Container font={fontSize}>
            <span className="first-title">{title}</span>
            {children}
        </Component.Container>
    );
}

export default ContainerItems;