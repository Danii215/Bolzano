import "@/assets/sass/pages/home.scss";
import { Banner, Calculator, CardList, Coin } from "@/components";
import Calculadora from "@/assets/img/calculator.jpg";

export default function Teorema() {
    return (
        <main>
            <Banner
                text={{
                    title: "",
                    titleHighlight: "Calculadora",
                }}
            >
                <Coin
                    title="Imagem ilustrativa de uma calculadora"
                    image={Calculadora}
                />
            </Banner>
            <Calculator />
            <CardList />
        </main>
    );
}
