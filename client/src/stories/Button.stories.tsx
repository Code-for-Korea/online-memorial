import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonProps } from "../components/common/Button";
import PaginationStyles from "../components/pagination/Pagination/style.module.css";

export default {
    title: "Common/Button",
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args:ButtonProps) => <Button {...args}/>

export const AddPost = Template.bind({});
AddPost.args = {
    text: "추모글 남기기",
}

export const PaginationLeft = Template.bind({});
PaginationLeft.args = {
    text: "<",
    style: PaginationStyles["pagination--button"]
}

export const PaginationRight = Template.bind({});
PaginationRight.args = {
    text: ">",
    style: PaginationStyles["pagination--button"]
}