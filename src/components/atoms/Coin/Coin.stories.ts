import type { Meta, StoryObj } from "@storybook/react";
import { Coin } from "./Coin";
import "@/assets/sass/main.scss";

import bernard from "@/assets/img/bernard.jpeg";
import teorema from "@/assets/img/teorema.png";
import bisseccao from "@/assets/img/bisseccao.jpg";
import calculator from "@/assets/img/calculator.jpg";

const meta = {
    title: "Átomos/Coin",
    component: Coin,
    argTypes: {
        title: {
            type: "string",
        },
        image: {
            type: "symbol",
        },
    },
} satisfies Meta<typeof Coin>;

export default meta;
type Story = StoryObj<typeof Coin>;

export const Bernard: Story = {
    args: { title: "Bernard Bolzano", image: bernard },
};

export const Teorema: Story = {
    args: { title: "Teorema de Bolzano", image: teorema },
};

export const Bissecção: Story = {
    args: { title: "Método da Bissecção", image: bisseccao },
};

export const Calculadora: Story = {
    args: { title: "Calculadora", image: calculator },
};
