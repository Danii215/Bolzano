"use client";
import { TextInput } from "@/components/atoms";
import style from "./CalcForm.module.scss";
import { FormEvent } from "react";

interface calculatorFormInputNames {
    expression: HTMLInputElement;
    a: HTMLInputElement;
    b: HTMLInputElement;
    e: HTMLInputElement;
}

interface calculatorProps {
    expression: string;
    a: string;
    b: string;
    e: string;
}

export function CalcForm() {
    function submitHandler(event: FormEvent) {
        event.preventDefault();

        const body: calculatorProps = {
            expression: (event.target as unknown as calculatorFormInputNames)
                .expression.value,
            a: (event.target as unknown as calculatorFormInputNames).a.value,
            b: (event.target as unknown as calculatorFormInputNames).b.value,
            e: (event.target as unknown as calculatorFormInputNames).e.value,
        };

        // @TODO enviar body pra calculadora calcular
        console.log(body);
    }

    return (
        <form className={style.calcForm} onSubmit={submitHandler}>
            <article>
                <TextInput
                    id="expression"
                    label="Insira a sua expressão matemática f(x)."
                    placeholder="Ex: x^3 - x - 2"
                />
                <TextInput
                    id="a"
                    label="Insira o primeiro valor do intervalo (Ou deixe vazio para 0)."
                    placeholder="Ex: 2"
                />
                <TextInput
                    id="b"
                    label="Insira o segundo valor do intervalo (Ou deixe vazio para 0)."
                    placeholder="Ex: 3"
                />
                <TextInput
                    id="e"
                    label="Insira a margem de erro."
                    placeholder="Ex: 0.002"
                />
            </article>
            <input type="submit" value="Calcular" />
        </form>
    );
}
