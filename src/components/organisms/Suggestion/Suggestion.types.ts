import { ButtonProps } from "@/components/atoms/Button/Button.types";
import React from "react";

export interface SuggestionProps {
    title: string;
    content: string;
    orientation?: "left" | "right";
    button?: ButtonProps;
    children?: React.ReactNode;
}
