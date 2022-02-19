import React from "react";
import styles from "./style.module.css";

export type DividerProps = {
    content?: string | React.ReactNode;
}

const DataTableRow: React.FC<DividerProps> = ({content}) => {

    return (
        <td className={styles["memorial-data-table--body-cell"]}>
            {content}
        </td>
    )
};

export default DataTableRow;