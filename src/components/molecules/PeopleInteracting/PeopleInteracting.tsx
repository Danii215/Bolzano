import Image from "next/image";
import manHoldingPhoneSVG from "@/assets/img/manHoldingPhone.svg";
import Woman from "@/assets/img/woman.svg";
import style from "./PeopleInteracting.module.scss";
import { LoadingSkeleton } from "@/components/atoms";
import { Suspense } from "react";

export function PeopleInteracting() {
    return (
        <Suspense fallback={<LoadingSkeleton width={400} height={300} />}>
            <article className={style.peopleInteracting}>
                <Image src={manHoldingPhoneSVG} alt="Homem segurando celular" />
                <Image src={Woman} alt="Mulher" />
            </article>
        </Suspense>
    );
}
