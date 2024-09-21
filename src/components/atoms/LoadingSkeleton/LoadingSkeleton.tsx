import style from "./LoadingSkeleton.module.scss";
import { LoadingSkeletonProps } from "./LoadingSkeleton.types";

export function LoadingSkeleton({ height, width }: LoadingSkeletonProps) {
    return (
        <article
            className={style.loadingSkeleton}
            style={{ width: width, height: height }}
        ></article>
    );
}
