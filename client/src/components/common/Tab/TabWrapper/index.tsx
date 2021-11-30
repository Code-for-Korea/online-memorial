import React from "react";
import Container from "../../Container";
import styles from "./style.module.css";

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
        <Container style={styles["tab--wrapper"]}>
            {
                children
            }
        </Container>
    )
};

export default TabWrapper;