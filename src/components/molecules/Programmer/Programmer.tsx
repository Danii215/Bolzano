import { Computer, Gear, Man, Window } from "@/components/atoms";
import style from "./Programmer.module.scss";
import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/atoms";

export function Programmer() {
    return (
        <Suspense fallback={<LoadingSkeleton width={400} height={400} />}>
            <section className={style.programmer}>
                <Computer />
                <Window />
                <Gear />
                <Man />
            </section>
        </Suspense>
    );
}
