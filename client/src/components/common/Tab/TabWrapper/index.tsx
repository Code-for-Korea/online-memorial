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

    return (
        <Container>
            {
                children
            }
        </Container>
    )
};

export default TabWrapper;