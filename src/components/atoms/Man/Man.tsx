import Image from "next/image";
import manSVG from "@/assets/img/man.svg";

export function Man() {
    return <Image src={manSVG} alt="Homem" />;
}
