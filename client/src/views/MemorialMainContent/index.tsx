import React, { useCallback, useState } from "react";
import FlexColumn from "../../components/common/FlexColumn";
import TabBody from "../../components/common/Tab/TabBody";
import TabHeader from "../../components/common/Tab/TabHeader";
import TabWrapper, { TabData } from "../../components/common/Tab/TabWrapper";
import MemorialInformation from "./MemorialInfomations";
import MemorialPosts from "./MemorialPosts";
import styles from "./style.module.css";

export type MemorialMainContentProps = {
    postSubmitted: boolean;
}

const MemorialMainContent: React.FC<MemorialMainContentProps> = ({ postSubmitted }) => {


    const [tabList, setTabList] = useState<TabData[]>([
        {
            id: 1,
            name: "추모공간",
            visible: true
        },
        {
            id: 2,
            name: "추모관",
            visible: false
        },
    ]);

    const findTabByName = useCallback((name: TabData["name"]) => {
        return tabList.find((tabData) => tabData.name === name);
    }, [tabList]);

    const onClickTab = useCallback((id: TabData["id"]) => (_: React.MouseEvent<HTMLDivElement>) => {
        setTabList(prev => prev.map((tabData) => {
            if (tabData.id === id) {
                return {
                    ...tabData,
                    visible: true
                }
            }
            return {
                ...tabData,
                visible: false
            }
        }))
    }, []);

    return (
        <FlexColumn style={styles["memorial-posts--wrapper"]}>
            <TabHeader tabList={tabList} onClickTab={onClickTab} />
            <TabWrapper>
                <TabBody visible={findTabByName("추모공간")?.visible ?? false}>
                    <MemorialPosts postSubmitted={postSubmitted} />
                </TabBody>
                <TabBody visible={findTabByName("추모관")?.visible ?? false}>
                    <MemorialInformation />
                </TabBody>
            </TabWrapper>
        </FlexColumn>
    )
};

export default MemorialMainContent;
