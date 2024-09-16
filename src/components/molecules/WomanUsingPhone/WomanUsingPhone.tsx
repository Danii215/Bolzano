import Image from "next/image";
import phone from "@/assets/img/phone.svg";
import womanLiking from "@/assets/img/womanLiking.svg";
import style from "./WomanUsingPhone.module.scss";

export function WomanUsingPhone() {
    return (
        <article className={style.womanUsingPhone}>
            <Image src={phone} alt="Homem segurando celular" />
            <Image src={womanLiking} alt="Mulher" />
        </article>
    );
}
