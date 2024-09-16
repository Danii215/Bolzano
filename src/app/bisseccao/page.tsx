import "@/assets/sass/pages/home.scss";
import { Banner, CallToCalc, Coin, Content } from "@/components";
import Imagem from "@/assets/img/bisseccao.jpg";

export default function Bisseccao() {
    return (
        <main>
            <Banner
                text={{
                    title: "Sobre o",
                    titleHighlight: "Método da Bissecção",
                }}
            >
                <Coin title="Berbard Bolzano" image={Imagem} />
            </Banner>
            <section className="contentGrid wrapper">
                <Content title="Introdução ao Método da Bisseção">
                    <p>
                        O Método da Bisseção é um algoritmo numérico utilizado
                        para encontrar raízes de equações não lineares de forma
                        aproximada. Baseado no Teorema de Bolzano, este método é
                        amplamente empregado em situações práticas onde a função
                        é contínua em um intervalo e se deseja encontrar um
                        ponto onde a função se anula. Sua simplicidade e
                        confiabilidade fazem dele uma ferramenta fundamental em
                        cálculos numéricos.
                    </p>
                </Content>
                <Content title="Enunciado e Explicação do Teorema de Bolzano">
                    <p>
                        {`O Teorema de Bolzano pode ser enunciado da seguinte forma: Seja f uma função contínua em um intervalo fechado [a,b]. Se f(a) e f(b) têm sinais opostos, ou seja, f(a) ⋅ f(b) < 0, então existe pelo menos um ponto c ∈ (a,b) tal que f(c)=0.`}
                    </p>
                    <h4>Explicação Intuitiva</h4>
                    <p>{`Imagine que a função f(x) descreve uma curva no plano cartesiano. Se em um ponto a, a curva está abaixo do eixo x (ou seja, f(a) < 0), e em outro ponto b, ela está acima do eixo x (ou seja, f(b)>0), então a curva deve, necessariamente, "cruzar" o eixo x em algum ponto entre a e b. Esse ponto c, onde a função cruza o eixo x, é uma solução da equação f(x)=0.`}</p>
                    <p>
                        Esse teorema depende da ideia de continuidade: a função
                        não pode "pular" de um valor negativo para um valor
                        positivo sem passar pelo zero, o que é garantido pela
                        continuidade da função em [a,b].
                    </p>
                </Content>
                <Content title="Exemplo Prático">
                    <p>
                        Considere a função f(x) = x^3 − x − 2. Vamos encontrar
                        uma raiz no intervalo [1,2]:
                    </p>
                    <ol>
                        <li>
                            Inicialização: a = 1, b = 2. Calculamos f(a) = −2 e
                            f(b) = 5, que têm sinais opostos.
                        </li>
                        <li>
                            Ponto Médio: O ponto médio é c = (1 + 2) / 2 = 1.5.
                            Avaliamos f(1.5) = (1.5)^3 − 1.5 − 2 = −0.375.
                        </li>
                        <li>
                            Atualização: Como f(1.5) e f(1) têm sinais opostos,
                            a raiz está no intervalo [1.5,2]. Atualizamos a =
                            1.5, mantendo b = 2.
                        </li>
                        <li>
                            Repetição: Continuamos o processo até obter uma
                            precisão desejada.
                        </li>
                    </ol>
                </Content>
                <Content title="Convergência e Precisão">
                    <p>
                        O Método da Bisseção é garantido para convergir, desde
                        que a função seja contínua e o intervalo inicial
                        contenha uma raiz. A precisão do método depende da
                        escolha do intervalo inicial e do número de iterações. A
                        convergência é linear, o que significa que o erro é
                        reduzido pela metade a cada iteração, mas a taxa de
                        convergência é mais lenta em comparação com métodos mais
                        sofisticados, como o Método de Newton-Raphson.
                    </p>
                </Content>
                <Content title="Aplicações e Limitações">
                    <p>Aplicações:</p>
                    <ul>
                        <li>
                            Cálculo Numérico: Utilizado para encontrar raízes de
                            equações em diversas áreas da engenharia e ciências.
                        </li>
                        <li>
                            Programação Científica: Implementado em bibliotecas
                            de software para resolver equações complexas onde
                            métodos analíticos são inviáveis.
                        </li>
                    </ul>
                    <p>Limitações:</p>
                    <ul>
                        <li>
                            Convergência Lenta: Comparado a outros métodos, o
                            Método da Bisseção pode ser mais lento na
                            convergência.
                        </li>
                        <li>
                            Necessidade de Intervalo Inicial: O método requer um
                            intervalo inicial onde a função muda de sinal, o que
                            pode não ser sempre facilmente identificável.
                        </li>
                    </ul>
                </Content>
                <Content title="Conclusão">
                    <p>
                        O Método da Bisseção é uma técnica fundamental na
                        matemática numérica que aproveita a continuidade das
                        funções para encontrar raízes com confiabilidade. Apesar
                        de suas limitações em termos de velocidade de
                        convergência, sua simplicidade e eficácia em garantir
                        uma solução aproximada o tornam uma ferramenta valiosa
                        em muitos contextos práticos e acadêmicos.
                    </p>
                </Content>
            </section>
            <CallToCalc />
        </main>
    );
}
