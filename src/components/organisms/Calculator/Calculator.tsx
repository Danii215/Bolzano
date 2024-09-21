"use client";
import { CalcForm, Table } from "@/components/molecules";
import style from "./Calculator.module.scss";
import { useEffect, useState } from "react";
import { Calculate, CalculationRequirements } from "@/assets/logic";
import { Message } from "@/components/atoms";

export function Calculator() {
    const [rows, setRows] = useState<string[][]>([]);
    const [success, setSuccess] = useState<boolean>(true);
    const [message, setMessage] = useState<string>("");
    const [calculationRequirements, setCalculationRequirements] =
        useState<CalculationRequirements>();

    useEffect(() => {
        if (calculationRequirements) {
            const result = Calculate(calculationRequirements);
            setRows(result.data);
            setSuccess(result.success);
            setMessage(result.message);
        }
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
            {message && <Message success={success} message={message} />}
        </section>
    );
}
