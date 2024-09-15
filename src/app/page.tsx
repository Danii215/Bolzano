import "@/assets/sass/pages/home.scss";
import { Banner, Programmer } from "@/components";

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
        </main>
    );
}
