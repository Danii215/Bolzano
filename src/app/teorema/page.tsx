import "@/assets/sass/pages/home.scss";
import { Banner, CallToCalc, Coin, Content } from "@/components";
import Teorem from "@/assets/img/teorema.png";

export default function Teorema() {
    return (
        <main>
            <Banner
                text={{
                    title: "Sobre o",
                    titleHighlight: "Teorema de Bolzano",
                }}
            >
                <Coin title="Berbard Bolzano" image={Teorem} />
            </Banner>
            <section className="contentGrid wrapper">
                <Content title="Introdução ao Teorema de Bolzano">
                    <p>
                        O Teorema de Bolzano, também conhecido como Teorema do
                        Valor Intermediário, é um dos resultados mais
                        fundamentais da análise matemática. Este teorema afirma
                        que, se uma função contínua assume valores opostos em
                        dois pontos de um intervalo fechado, então existe pelo
                        menos um ponto dentro desse intervalo no qual a função
                        se anula. Isso significa que, sob as condições certas,
                        uma função contínua que "cruza" o eixo xxx em um
                        intervalo deve ter pelo menos um zero nesse intervalo.
                    </p>
                    <p>
                        O teorema é crucial para a compreensão da continuidade e
                        serve como base para muitos outros teoremas e métodos
                        numéricos, como o método da bisseção para encontrar
                        raízes de funções. Desenvolvido por Bernard Bolzano no
                        início do século XIX, este teorema foi uma das primeiras
                        tentativas de formalizar o conceito de continuidade de
                        forma rigorosa, muito antes que o campo da análise fosse
                        estruturado com a precisão moderna.
                    </p>
                </Content>
                <Content title="Enunciado e Funcionamento do Método da Bisseção">
                    <p>
                        O Método da Bisseção explora a ideia de que, se uma
                        função contínua muda de sinal em um intervalo, então
                        deve haver pelo menos um ponto nesse intervalo onde a
                        função é zero. O algoritmo utiliza essa propriedade para
                        encontrar uma aproximação da raiz da função.
                    </p>
                    <h4>Passos do Algoritmo:</h4>
                    <ol>
                        <li>{`Escolha do Intervalo Inicial: Selecione um intervalo [a,b] tal que f(a) e f(b) tenham sinais opostos, isto é, f(a) ⋅ f(b) < 0.`}</li>
                        <li>
                            Cálculo do Ponto Médio: Calcule o ponto médio c =
                            (a+b) / 2 do intervalo.
                        </li>
                        <li>
                            Avaliação da Função: Avalie a função no ponto médio,
                            isto é, f(c).
                        </li>
                        <li>Atualização do Intervalo:</li>
                        <ul>
                            <li>Se f(c) = 0, então c é a raiz exata.</li>
                            <li>{`Se f(a) ⋅ f(c) < 0, a raiz está no intervalo [a,c]. Atualize o intervalo para [a,c].`}</li>
                            <li>
                                Caso contrário, a raiz está no intervalo [c,b].
                                Atualize o intervalo para [c,b].
                            </li>
                        </ul>
                        <li>
                            Repetição: Repita os passos 2 a 4 até que o
                            intervalo seja suficientemente pequeno, ou seja, até
                            que a diferença ∣b−a∣ seja menor do que um valor de
                            tolerância pré-definido (margem de erro).
                        </li>
                    </ol>
                </Content>
                <Content title="Prova do Teorema de Bolzano">
                    <p>
                        A prova do Teorema de Bolzano baseia-se no conceito de
                        continuidade e utiliza uma técnica comum em análise
                        chamada de argumento de bisseção. A ideia básica é
                        dividir o intervalo repetidamente, isolando o ponto em
                        que a função se anula. Aqui está uma versão simplificada
                        da prova:
                    </p>
                    <p>Prova:</p>
                    <ol>
                        <li>{`Seja f contínua em [a,b], com f(a) < 0 e f(b) > 0.`}</li>
                        <li>
                            Como a função é contínua, ela não pode sofrer
                            "saltos" abruptos. Dividimos o intervalo [a,b] no
                            ponto médio c = (a+b) / 2.
                        </li>
                        <li>Se f(c) = 0, encontramos a solução.</li>
                        <li>Se f(c) ≠ 0, verificamos o sinal de f(c):</li>
                        <ul>
                            <li>{`Se f(c) < 0, repetimos o procedimento no intervalo [c,b].`}</li>
                            <li>{`Se f(c) > 0, repetimos o procedimento no intervalo [a,c].`}</li>
                        </ul>
                        <li>
                            Continuamos esse processo de bisseção até que o
                            intervalo se reduza a um valor suficientemente
                            pequeno, encontrando assim o ponto c onde f(c) = 0.
                        </li>
                    </ol>
                    <p>
                        Essa técnica é a base para o método numérico de
                        bisseção, que é amplamente utilizado para encontrar
                        raízes de equações em aplicações práticas de matemática
                        e ciências.
                    </p>
                </Content>
                <Content title="Contexto Histórico do Teorema de Bolzano">
                    <p>
                        Bernard Bolzano formulou este teorema em 1817, em sua
                        obra Rein analytischer Beweis ("Uma Prova Puramente
                        Analítica"), que procurava estabelecer rigor matemático
                        em uma época em que muitos conceitos de cálculo ainda
                        eram informais e baseados em intuições geométricas.
                        Naquele período, o cálculo infinitesimal desenvolvido
                        por matemáticos como Newton e Leibniz carecia de uma
                        fundamentação sólida.
                    </p>
                    <p>
                        Bolzano foi um dos primeiros matemáticos a tentar
                        formalizar a ideia de continuidade sem depender da noção
                        de derivadas, que dominava o pensamento na época. Embora
                        Bolzano tenha sido ignorado durante sua vida e seu
                        trabalho tenha sido amplamente negligenciado, sua
                        formulação do Teorema do Valor Intermediário foi
                        redescoberta e formalizada décadas depois por outros
                        matemáticos, como Karl Weierstrass, que ajudaram a
                        estabelecer as bases da análise matemática moderna.
                    </p>
                </Content>
                <Content title="Aplicações do Teorema de Bolzano">
                    <p>
                        O Teorema de Bolzano tem inúmeras aplicações em diversos
                        ramos da matemática e das ciências, particularmente na
                        solução de equações e na análise de funções. Algumas das
                        aplicações mais importantes incluem:
                    </p>
                    <ol>
                        <li>Método da Bisseção</li>
                        <p>
                            O teorema fornece a base teórica para o método da
                            bisseção, um algoritmo numérico que é utilizado para
                            encontrar soluções aproximadas de equações da forma
                            f(x) = 0. Esse método é amplamente utilizado em
                            programação científica e computação, onde a precisão
                            pode ser ajustada conforme necessário.
                        </p>
                        <li>Teoremas de Existência</li>
                        <p>
                            Muitos teoremas de existência na análise se baseiam
                            no Teorema de Bolzano. Por exemplo, ele é usado para
                            provar a existência de soluções para equações
                            diferenciais e integrais em intervalos fechados,
                            fornecendo uma base teórica para a análise
                            matemática aplicada em física, engenharia e economia
                        </p>
                        <li>Continuidade e Zeros de Funções</li>
                        <p>
                            O teorema também é crucial para a compreensão de
                            propriedades de funções contínuas e para garantir a
                            existência de soluções em muitos problemas da
                            matemática pura e aplicada. Isso inclui áreas como a
                            topologia, onde conceitos de continuidade são
                            centrais para o estudo de espaços métricos e funções
                            contínuas entre eles.
                        </p>
                    </ol>
                </Content>
                <Content title="Importância na Matemática Moderna">
                    <p>
                        O Teorema de Bolzano é um dos primeiros exemplos de como
                        a matemática pode ser formalizada de maneira rigorosa.
                        Sua formulação deu origem a muitas das abordagens
                        formais que conhecemos hoje no campo da análise, como a
                        definição precisa de continuidade, limites e
                        convergência. Embora a obra de Bolzano não tenha
                        recebido a devida atenção em sua época, seu teorema se
                        tornou uma pedra angular da matemática moderna.
                    </p>
                    <p>
                        Além disso, sua aplicação prática no método de bisseção
                        e em teoremas de existência o torna indispensável em
                        diversas áreas da matemática aplicada, como física,
                        engenharia e ciências da computação. O Teorema de
                        Bolzano representa o poder da matemática em prever e
                        garantir resultados em situações em que o comportamento
                        de uma função pode parecer imprevisível, desde que a
                        continuidade seja garantida.
                    </p>
                </Content>
            </section>
            <CallToCalc />
        </main>
    );
}
