"use client";
import { CalcForm, Table } from "@/components/molecules";
import style from "./Calculator.module.scss";
import { useEffect, useState } from "react";
import { Calculate, CalculationRequirements } from "@/assets/logic";

export function Calculator() {
    const [rows, setRows] = useState<string[][]>([]);
    const [calculationRequirements, setCalculationRequirements] =
        useState<CalculationRequirements>();

    useEffect(() => {
        calculationRequirements && setRows(Calculate(calculationRequirements));
    }, [calculationRequirements]);

    return (
        <section className={`${style.calculator} wrapper`}>
            <CalcForm
                defineCalculationRequirements={(
                    data: CalculationRequirements,
                ) => setCalculationRequirements(data)}
            />
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
