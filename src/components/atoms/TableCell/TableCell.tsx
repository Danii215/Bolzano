import style from "./TableCell.module.scss";
import { TableCellProps } from "./TableCell.types";

export function TableCell({ text, header }: TableCellProps) {
    return header ? (
        <th className={`${style.tableCell} ${style["tableCell--header"]}`}>
            {text}
        </th>
    ) : (
        <td className={style.tableCell}>{text}</td>
    );
}
