import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextChunk, { TextChunkProps } from "../components/common/TextChunk";

import memorialAnimationStyles from "../views/MemorialAnimation/style.module.css";
import memorialPostCountTextStyles from "../views/MemorialMainContent/MemorialPosts/style.module.css";

export default {
    title: "Common/TextChunk",
    component: TextChunk
} as ComponentMeta<typeof TextChunk>

const Template: ComponentStory<typeof TextChunk> = (args: TextChunkProps) => <TextChunk {...args}></TextChunk>;

export const MemorialAnimationText = Template.bind({})
MemorialAnimationText.args = {
    content: "2021년, 산업 재해로 인해\n사망한 분들의 숫자입니다",
    isParagraph: true,
    style: memorialAnimationStyles["memorial-animation--text"]
}

export const MemorialPostCountText = Template.bind({})
MemorialPostCountText.args = {
    content: "230명이\n추모하셨습니다",
    isParagraph: true,
    style: memorialPostCountTextStyles["pagination--text"]
}