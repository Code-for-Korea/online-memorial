import React from "react";
import { ComponentMeta } from "@storybook/react";
import MemorialInfomations from "../views/MemorialMainContent/MemorialInfomations";

export default {
    title: "MemorialMainContent/MemorialInfomations",
    component: MemorialInfomations
} as ComponentMeta<typeof MemorialInfomations>

export const MemorialInfomationsSample = () => <MemorialInfomations></MemorialInfomations>;