import { Computer, Gear, Man, Window } from "@/components/atoms";
import style from "./Programmer.module.scss";

export function Programmer() {
    return (
        <section className={style.programmer}>
            <Computer />
            <Window />
            <Gear />
            <Man />
        </section>
    );
}
