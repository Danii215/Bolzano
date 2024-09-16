import { Button, Content } from "@/components/atoms";
import style from "./CallToCalc.module.scss";

export function CallToCalc() {
    return (
        <section className={style.callToCalc}>
            <article className="wrapper">
                <Content title="Calcular sua própria função usando o Teorema de Bolzano" />
                <Button
                    text="Calculadora Interativa"
                    href="/calculadora"
                    hasArrow
                />
            </article>
        </section>
    );
}
