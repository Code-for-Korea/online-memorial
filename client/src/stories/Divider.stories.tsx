import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Divider, {DividerProps} from "../components/Divider";

export default {
    title: "Header/Divider",
    component: Divider
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args: DividerProps) => <Divider {...args}/>;

export const TitleOne = Template.bind({})
TitleOne.args = {
    title: `사회적 추모 아카이브 ${new Date(Date.now()).getFullYear()}`
}

export const TitleTwo = Template.bind({})
TitleTwo.args = {
    title: "당신이 읽어야 할 산업재해 이야기"
}

export const withoutTitle = Template.bind({})

