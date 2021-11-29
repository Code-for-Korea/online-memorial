import React from "react";
import { ComponentMeta } from "@storybook/react";
import MemorialStatistics from "../views/MemorialMainContent/MemorialInfomations/MemorialStatistics";

export default {
    title: "MemorialMainContent/MemorialStatistics",
    component: MemorialStatistics
} as ComponentMeta<typeof MemorialStatistics>

export const MemorialStatisticsSample = () => <MemorialStatistics/>;