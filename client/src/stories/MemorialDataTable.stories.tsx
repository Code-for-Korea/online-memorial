import React from "react";
import { ComponentMeta } from "@storybook/react";
import MemorialDataTable from "../views/MemorialMainContent/MemorialInfomations/MemorialDataTable";

export default {
    title: "MemorialMainContent/MemorialDataTable",
    component: MemorialDataTable
} as ComponentMeta<typeof MemorialDataTable>

export const MemorialDataTablesSample = () => <MemorialDataTable/>;