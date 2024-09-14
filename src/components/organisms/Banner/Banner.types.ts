import { PageTitleProps } from "@/components/atoms/PageTitle/PageTitle.types";
import React from "react";

export interface BannerProps {
    children: React.ReactNode;
    text: PageTitleProps;
}
