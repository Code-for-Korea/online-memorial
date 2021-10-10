import React from "react";
import Container from "../../components/common/Container";
import styles from "./style.module.css";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({ children }) => {

    return (
        <Container style={styles.layout}>
            {
                children
            }
        </Container>
    )
};

export default Layout;