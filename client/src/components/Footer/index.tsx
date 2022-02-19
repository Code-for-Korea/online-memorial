import React from "react";
import FlexColumn from "../common/FlexColumn";
import styles from "./style.module.css";

export type FooterProps = {}

const Footer: React.FC<FooterProps> = ({}) => {

    return (
        <FlexColumn style={styles["footer__outer-wrapper"]}>
            <footer className={styles["footer__inner-wrapper"]}>
                <p>Footer goes here...</p>
            </footer>
        </FlexColumn>
    )
};

export default Footer;