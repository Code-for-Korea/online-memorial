import React from "react";
import Container from "../../Container";

export type TabData = {
    id: number;
    name: string;
    visible: boolean;
}

type TabWrapperProps = {
    children: React.ReactNode;
}

const TabWrapper:React.FC<TabWrapperProps> = ({ children }) => {

    if (Array.isArray(children)) {
        children.forEach((child) => {
            console.log(child);
        });
    }
    

    return (
        <Container>
            {
                children
            }
        </Container>
    )
};

export default TabWrapper;