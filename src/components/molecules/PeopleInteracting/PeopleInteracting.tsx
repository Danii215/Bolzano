import Image from "next/image";
import manHoldingPhoneSVG from "@/assets/img/manHoldingPhone.svg";
import Woman from "@/assets/img/woman.svg";
import style from "./PeopleInteracting.module.scss";

export function PeopleInteracting() {
    return (
        <article className={style.peopleInteracting}>
            <Image src={manHoldingPhoneSVG} alt="Homem segurando celular" />
            <Image src={Woman} alt="Mulher" />
        </article>
    );
}
