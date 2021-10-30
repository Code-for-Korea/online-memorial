import React, { useCallback, useState } from "react";
import FlexColumn from "../../components/common/FlexColumn";
import TabBody from "../../components/common/Tab/TabBody";
import TabHeader from "../../components/common/Tab/TabHeader";
import TabWrapper, { TabData } from "../../components/common/Tab/TabWrapper";
import TextChunk from "../../components/common/TextChunk";
import Pagination from "../../components/pagination/Pagination";
import PostList from "../../components/post/PostList";
import styles from "./style.module.css";


const MemorialPosts:React.FC = () => {

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

    const updatePostPageNum = useCallback((newPageNum) => {
        setPostPageNum(newPageNum);
    }, []);

    const getLastPostPageNum = useCallback(() => {
        return 14;
    }, [])

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
                    <FlexColumn style={styles["pagination"]}>
                        <TextChunk content={`230명이\n추모하셨습니다`} style={styles["pagination--text"]}/>
                        <Pagination onPageChange={updatePostPageNum} lastPage={getLastPostPageNum()} initialPageNum={postPageNum}/>
                    </FlexColumn>
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