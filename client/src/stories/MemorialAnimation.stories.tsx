import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MemorialAnimation, { MemorialAnimationProps } from "../views/MemorialAnimation";

export default {
    title: "Animation/MainAnimation",
    component: MemorialAnimation
} as ComponentMeta<typeof MemorialAnimation>

const Template: ComponentStory<typeof MemorialAnimation> = (args: MemorialAnimationProps) => <MemorialAnimation {...args}></MemorialAnimation>;

export const MemorialAnimationSample = Template.bind({})
MemorialAnimationSample.args = {
    year: 2021
}