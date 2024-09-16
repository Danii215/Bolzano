import { Card } from "@/components/atoms";
import style from "./CardList.module.scss";

import Bernard from "@/assets/img/bernard.jpeg";
import Teorema from "@/assets/img/teorema.png";
import Bisseccao from "@/assets/img/bisseccao.jpg";

export function CardList() {
    return (
        <section className={`${style.cardList} wrapper`}>
            <Card
                title="Matemático Italiano Bernard Bolzano"
                cta="Aprender"
                href="/bolzano"
                image={Bernard}
            />
            <Card
                title="Teorema de Bolzano e Zero de Funções"
                cta="Aprender"
                href="/teorema"
                image={Teorema}
            />
            <Card
                title="Método da Bissecção e Raízes"
                cta="Aprender"
                href="/bisseccao"
                image={Bisseccao}
            />
        </section>
    );
}
