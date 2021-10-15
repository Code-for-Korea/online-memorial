import React from "react";
import FlexRow from "../../FlexRow";
import { TabData } from "../TabWrapper";
import styles from "./style.module.css";

type TabHeaderProps = {
    tabList: TabData[];
    onClickTab: (id:TabData["id"]) => (evt:React.MouseEvent<HTMLDivElement>) => void;
}

const TabHeader:React.FC<TabHeaderProps> = ({ tabList, onClickTab }) => {

    return (
        <FlexRow style={styles["tab--wrapper"]}>
            {
                tabList.map((tabData) => {
                    return (
                        <div key={`tab-${tabData.id}`} onClick={onClickTab(tabData.id)} className={`${styles["tab--header__default"]} ${tabData.visible ? `${styles["tab--header__show"]}` : ""}`}>
                            {
                                tabData.name
                            }
                        </div>
                    )
                })
            }
        </FlexRow>
    )
};

export default TabHeader;