import React from "react";
import MemorialArticles from "./MemorialArticles";
import MemorialDataTable from "./MemorialDataTable";
import MemorialStatistics from "./MemorialStatistics";

type MemorialInfomationsProps = {}

const MemorialInfomations:React.FC<MemorialInfomationsProps> = () => {

    return (
        <>
            <MemorialStatistics/>
            <MemorialDataTable />
            <MemorialArticles />
        </>
    )
};

export default MemorialInfomations;