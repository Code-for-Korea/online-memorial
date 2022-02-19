import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsCard, {NewsCardProps} from "../components/newsCard";

export default {
    title: "News/NewsCard",
    component: NewsCard
} as ComponentMeta<typeof NewsCard>

const Template: ComponentStory<typeof NewsCard> = (args: NewsCardProps) => <NewsCard {...args}/>

export const NewsCardSampleWithoutThumbnail = Template.bind({})
NewsCardSampleWithoutThumbnail.args = {
    title: "MBC 기획취재팀의 사람이 또 떨어진다. 추락사 1136 추적보도",
    description: "최근 3년간 추락하로 사망한 1,136명이 사망했습니다. 3년간 사망한 재해조사 의견서, 판결..",
    url: "https://google.com"
}

export const NewsCardSampleWithThumbnail = Template.bind({})
NewsCardSampleWithThumbnail.args = {
    title: "MBC 기획취재팀의 사람이 또 떨어진다. 추락사 1136 추적보도",
    description: "최근 3년간 추락하로 사망한 1,136명이 사망했습니다. 3년간 사망한 재해조사 의견서, 판결..",
    url: "https://google.com",
    thumbnail: "https://images.unsplash.com/photo-1633158832532-f71e9c7ac6d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
}