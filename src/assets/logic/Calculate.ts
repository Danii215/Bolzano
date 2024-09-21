import { CalculationRequirements } from "./CalculationRequirements";
import { evaluate } from "mathjs";

export function Calculate(data: CalculationRequirements): Array<Array<string>> {
    function f(x: number): number {
        return evaluate(data.expression.replace(/x/g, `(${x})`));
    }

    function calculateK(a: number, b: number, erro: number): number {
        return Math.ceil(
            (Math.log10(b - a) - Math.log10(erro)) / Math.log10(2),
        );
    }

    let a: number = +data.a;
    let b: number = +data.b;
    let erro: number = +data.e;
    let K: number = calculateK(a, b, erro);

    const iterationRows = [];

    for (let k = 0; k <= K; k++) {
        const fa: number = f(a);
        const media: number = (a + b) / 2;
        const fmedia: number = f(media);
        const erroAtual: number = b - a;

        const sinal: "+" | "-" = fa * fmedia > 0 ? "+" : "-";

        iterationRows.push([
            k.toString(),
            a.toFixed(6).toString(),
            b.toFixed(6).toString(),
            media.toFixed(6).toString(),
            fa.toFixed(6).toString(),
            fmedia.toFixed(6).toString(),
            sinal.toString(),
            erroAtual.toFixed(6).toString(),
        ]);

        if (sinal === "+") {
            a = media;
        } else {
            b = media;
        }

        if (erroAtual < erro) {
            break;
        }
    }

    return iterationRows;
}
