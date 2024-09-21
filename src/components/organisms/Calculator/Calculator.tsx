"use client";
import { CalcForm, Table } from "@/components/molecules";
import style from "./Calculator.module.scss";
import { useState } from "react";

export function Calculator() {
    const [rows, setRows] = useState<string[][]>([]);

    return (
        <section className={`${style.calculator} wrapper`}>
            <CalcForm />
            <article>
                <Table
                    header={[
                        "K",
                        "a",
                        "b",
                        "Média",
                        "f(a)",
                        "f(Média)",
                        "Sinal",
                        "Erro",
                    ]}
                    rows={rows}
                />
            </article>
        </section>
    );
}
