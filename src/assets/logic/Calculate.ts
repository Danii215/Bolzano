import { CalculateResource } from "./Calculate.resource";
import { CalculationRequirements } from "./CalculationRequirements";
import { evaluate } from "mathjs";

export function Calculate(data: CalculationRequirements): CalculateResource {
    function f(x: number): number | undefined {
        try {
            return evaluate(data.expression.replace(/x/g, `(${x})`));
        } catch {
            return undefined;
        }
    }

    function calculateK(a: number, b: number, erro: number): number {
        return Math.ceil(
            (Math.log10(b - a) - Math.log10(erro)) / Math.log10(2),
        );
    }

    let a: number = +data.a;
    let b: number = +data.b;
    const erro: number = +data.e;
    const K: number = calculateK(a, b, erro);

    let lastInterval: Array<string> = [];
    const iterationRows: Array<Array<string>> = [];

    for (let k = 0; k <= K; k++) {
        const fa: number | undefined = f(a);
        const media: number = (a + b) / 2;
        const fmedia: number | undefined = f(media);
        const erroAtual: number = b - a;

        if (fa == undefined || fmedia == undefined) {
            return {
                message:
                    "Ocorreu um erro. Por favor, verifique os dados inseridos.",
                success: false,
                data: [],
            };
        }

        const sinal: "+" | "-" = fa * fmedia > 0 ? "+" : "-";

        const aFormatted = a.toFixed(6).toString();
        const bFormatted = b.toFixed(6).toString();

        iterationRows.push([
            k.toString(),
            aFormatted,
            bFormatted,
            media.toFixed(6).toString(),
            fa.toFixed(6).toString(),
            fmedia.toFixed(6).toString(),
            sinal,
            erroAtual.toFixed(6).toString(),
        ]);

        lastInterval = [aFormatted, bFormatted];

        if (sinal === "+") a = media;
        else b = media;

        if (erroAtual < erro) break;
    }

    return {
        message:
            "A sua raíz está dentro do intervalo [" +
            lastInterval[0] +
            ";" +
            lastInterval[1] +
            "].",
        success: true,
        data: iterationRows,
    };
}
