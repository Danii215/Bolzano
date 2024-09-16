import "@/assets/sass/pages/home.scss";
import {
    Banner,
    CallToCalc,
    CardList,
    Programmer,
    Suggestion,
} from "@/components";
import { PeopleInteracting, WomanUsingPhone } from "@/components/molecules";

export default function Home() {
    return (
        <main>
            <Banner
                text={{
                    title: "Projeto de",
                    titleHighlight: "Cálculo Numérico Computacional",
                    subtitle:
                        "Projeto explicativo sobre o matemático Bernard Bolzano, seu trabalho, e o funcionamento do método da bissecção no cálculo de zero de funções.",
                }}
            >
                <Programmer />
            </Banner>
            <Suggestion
                title="Aprenda interativamente."
                content="Esse projeto possui uma calculadora customizada para calcular uma função qualquer, inserida pelo usuário, que mostrará todo o processo de calcular a possível localização das raízes da sua expressão utilizando o método da bissecção e o teorema de Bolzano."
                button={{ text: "Ir para a calculadora", href: "/calculadora" }}
            >
                <PeopleInteracting />
            </Suggestion>
            <Suggestion
                title="Aprenda ainda mais!"
                content="Encontre resultados e informações sobre muito além do teorema de Bolzano: O matemático italiano responsável pelo teorema, a lógica do método da bissecção, a técnica do zero de funções, o conceito de raízes de expressões de primeiro grau, segundo grau, etc. Tudo que estiver relacionado você pode encontrar aqui para aprender mais!"
                orientation="right"
            >
                <WomanUsingPhone />
            </Suggestion>
            <CardList />
            <CallToCalc />
        </main>
    );
}
