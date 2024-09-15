import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Button",
    component: Button,
    argTypes: {
        text: {
            type: "string",
        },
        href: {
            type: "string",
        },
        hasArrow: {
            type: "boolean",
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        text: "Ir para a calculadora",
        href: "/calculator",
        hasArrow: false,
    },
};

export const HasArrow: Story = {
    args: {
        text: "Calculadora Interativa",
        href: "/calculator",
        hasArrow: true,
    },
};

export const NoText: Story = {
    args: {
        text: "",
        href: "/",
        hasArrow: false,
    },
};

export const NoTextHasArrow: Story = {
    args: {
        text: "",
        href: "/",
        hasArrow: true,
    },
};
