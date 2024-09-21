import Image from "next/image";
import style from "./Coin.module.scss";
import { CoinProps } from "./Coin.types";
import { Suspense } from "react";
import { LoadingSkeleton } from "../LoadingSkeleton/LoadingSkeleton";

export function Coin({ title, image }: CoinProps) {
    return (
        <Suspense fallback={<LoadingSkeleton width={310} height={310} />}>
            <Image
                priority
                className={style.coin}
                src={image}
                alt={title}
                title={title}
            />
        </Suspense>
    );
}
