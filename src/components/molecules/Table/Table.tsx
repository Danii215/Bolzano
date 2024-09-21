import { TableCell } from "@/components/atoms/TableCell/TableCell";
import { TableProps } from "./TableProps.types";

export function Table({ header, rows }: TableProps) {
    return (
        <table>
            <thead>
                <tr>
                    {header?.map((thName) => (
                        <TableCell text={thName} header={true} key={thName} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows?.map((_, index) => {
                    return (
                        <tr key={"coluna" + index}>
                            {rows[index]?.map((tdName) => (
                                <TableCell
                                    text={tdName}
                                    header={false}
                                    key={tdName}
                                />
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
