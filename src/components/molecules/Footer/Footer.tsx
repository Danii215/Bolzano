import { Social } from "@/components/atoms";
import { Logo } from "@/components";
import style from "./Footer.module.scss";

export function Footer() {
    return (
        <footer className={style.footer}>
            <section className="wrapper">
                <Logo isBig />
                <article className={style.footer__texts}>
                    <p>Copyright © 2024 Danilo Storti.</p>
                    <p>Todos os direitos reservados.</p>
                </article>
                <article className={style.footer__socials}>
                    <Social
                        href="https://www.instagram.com/danilomovio/"
                        icon="instagram"
                    />
                    <Social
                        href="https://www.linkedin.com/in/danilo-movio/"
                        icon="linkedin"
                    />
                </article>
            </section>
        </footer>
    );
}
