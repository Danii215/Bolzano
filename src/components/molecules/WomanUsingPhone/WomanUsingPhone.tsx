import Image from "next/image";
import phone from "@/assets/img/phone.svg";
import womanLiking from "@/assets/img/womanLiking.svg";
import style from "./WomanUsingPhone.module.scss";
import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/atoms";

export function WomanUsingPhone() {
    return (
        <Suspense fallback={<LoadingSkeleton width={500} height={400} />}>
            <article className={style.womanUsingPhone}>
                <Image src={phone} alt="Homem segurando celular" />
                <Image src={womanLiking} alt="Mulher" />
            </article>
        </Suspense>
    );
}
