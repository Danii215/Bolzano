import { CalculateResource } from "./Calculate.resource";
import { CalculationRequirements } from "./CalculationRequirements";
import { evaluate } from "mathjs";

function calculateK(a: number, b: number, erro: number): number {
    return Math.ceil((Math.log10(b - a) - Math.log10(erro)) / Math.log10(2));
}

function numberFormatter(x: number): string {
    return x.toFixed(6).toString();
}

export function Calculate(data: CalculationRequirements): CalculateResource {
    function f(x: number): number | undefined {
        try {
            return evaluate(data.expression.replace(/x/g, `(${x})`));
        } catch {
            return undefined;
        }
    }

    let a: number = parseFloat(data.a);
    let b: number = parseFloat(data.b);
    const erro: number = parseFloat(data.e);

    if (Number.isNaN(a) || Number.isNaN(b))
        return {
            message:
                "Ocorreu um erro no intervalo selecionado. Por favor, verifique.",
            success: false,
            data: [],
        };

    if (Number.isNaN(erro))
        return {
            message:
                "Ocorreu um erro na margem de erro escolhida. Por favor, verifique.",
            success: false,
            data: [],
        };

    if (erro <= 0) {
        return {
            message: "A margem de erro deve ser um número maior do que zero.",
            success: false,
            data: [],
        };
    }

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
                    "Ocorreu um erro. Por favor, verifique a expressão matemática inserida.",
                success: false,
                data: [],
            };
        }

        const sinal: "+" | "-" = fa * fmedia > 0 ? "+" : "-";

        const aFormatted = numberFormatter(a);
        const bFormatted = numberFormatter(b);

        iterationRows.push([
            k.toString(),
            aFormatted,
            bFormatted,
            numberFormatter(media),
            numberFormatter(fa),
            numberFormatter(fmedia),
            sinal,
            numberFormatter(erroAtual),
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
