import Image from "next/image";
import computerSVG from "@/assets/img/computer.svg";

export function Computer() {
    return <Image src={computerSVG} alt="Computador" loading="eager" />;
}
