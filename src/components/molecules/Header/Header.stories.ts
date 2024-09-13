import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import "@/assets/sass/main.scss";

const meta = {
    title: "Moléculas/Header",
    component: Header,
    argTypes: {
        items: Array<{ href: string; label: string }>,
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        items: [
            { href: "/", label: "Início" },
            { href: "/matematico", label: "Sobre o Matemático" },
            { href: "/teorema", label: "Sobre o Teorema" },
            { href: "/bisseccao", label: "Método da Bissecção" },
            { href: "/calculadora", label: "Calculadora" },
        ],
    },
};

export const Empty: Story = {
    args: {
        items: [],
    },
};
