import Image from "next/image";
import gearSVG from "@/assets/img/gear.svg";

export function Gear() {
    return <Image src={gearSVG} alt="Engrenagem" />;
}
