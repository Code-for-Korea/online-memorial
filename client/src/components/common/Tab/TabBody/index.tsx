import React from "react";
import Container from "../../Container";
import { TabData } from "../TabWrapper";

type TabBodyProps = {
    visible: TabData["visible"];
    children: React.ReactNode;
}

const TabBody:React.FC<TabBodyProps> = ({ visible, children }) => {

    if (!visible) {
        return <></>;
    }

    return (
        <Container>
            {
                children
            }
        </Container>
    )
};

export default TabBody;