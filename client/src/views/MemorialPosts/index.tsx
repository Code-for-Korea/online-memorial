import React, { useCallback, useState } from "react";
import FlexColumn from "../../components/common/FlexColumn";
import TabBody from "../../components/common/Tab/TabBody";
import TabHeader from "../../components/common/Tab/TabHeader";
import TabWrapper, { TabData } from "../../components/common/Tab/TabWrapper";
import PostList from "../../components/post/PostList";
import styles from "./style.module.css";

type MemorialPostsProps = {
    
}

const MemorialPosts:React.FC<MemorialPostsProps> = ({  }) => {

    const [postPageNum, setPostPageNum] = useState<number>(1);
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

    const findTabById = useCallback((id:TabData["id"]) => {
        return tabList.find((tabData) => tabData.id === id);
    }, [tabList]);

    const findTabByName = useCallback((name:TabData["name"]) => {
        return tabList.find((tabData) => tabData.name === name);
    }, [tabList]);

    const onClickTab = useCallback((id:TabData["id"]) => (evt: React.MouseEvent<HTMLDivElement>) => {
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
            <TabHeader tabList={tabList} onClickTab={onClickTab}/>
            <TabWrapper>
                <TabBody visible={findTabByName("추모공간")?.visible??false}>
                    <PostList pageNum={postPageNum} />
                </TabBody>
                <TabBody visible={findTabByName("추모관")?.visible??false}>
                    empty
                </TabBody>
            </TabWrapper>
        </FlexColumn>
    )
};

export default MemorialPosts;