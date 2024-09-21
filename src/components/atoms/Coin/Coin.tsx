import Image from "next/image";
import style from "./Coin.module.scss";
import { CoinProps } from "./Coin.types";

export function Coin({ title, image }: CoinProps) {
    return (
        <Image
            priority
            className={style.coin}
            src={image}
            alt={title}
            title={title}
        />
    );
}
