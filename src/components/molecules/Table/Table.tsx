import { TableCell } from "@/components/atoms/TableCell/TableCell";
import { TableProps } from "./TableProps.types";
import style from "./Table.module.scss";
import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/atoms";

export function Table({ header, rows }: TableProps) {
    return (
        <Suspense fallback={<LoadingSkeleton width={1000} height={400} />}>
            <table className={style.table}>
                <thead>
                    <tr>
                        {header?.map((thName, index) => (
                            <TableCell
                                text={thName}
                                header={true}
                                key={"header" + thName + index}
                            />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows?.map((_, index) => {
                        return (
                            <tr key={"linha" + index}>
                                {rows[index]?.map((tdName, index) => (
                                    <TableCell
                                        text={tdName}
                                        header={false}
                                        key={"coluna" + tdName + index}
                                    />
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Suspense>
    );
}
