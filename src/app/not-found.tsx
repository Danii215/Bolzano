import "@/assets/sass/pages/home.scss";
import { Banner, CallToCalc, CardList } from "@/components";

export default function NotFound() {
    return (
        <main>
            <Banner
                text={{
                    title: "Ops!",
                    titleHighlight: "Você encontrou a página 404.",
                    subtitle:
                        "A página que você está tentando visitar não existe, ou não existe mais.",
                }}
            >
                <></>
            </Banner>
            <CardList />
            <CallToCalc />
        </main>
    );
}
