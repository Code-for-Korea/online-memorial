import React from "react";
import { ComponentMeta } from "@storybook/react";
import MemorialInformation from "../views/MemorialMainContent/MemorialInfomations";

export default {
    title: "MemorialMainContent/MemorialInformation",
    component: MemorialInformation
} as ComponentMeta<typeof MemorialInformation>

export const MemorialInformationSample = () => <MemorialInformation/>