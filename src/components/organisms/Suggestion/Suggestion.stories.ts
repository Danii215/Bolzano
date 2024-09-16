import type { Meta, StoryObj } from "@storybook/react";
import { Suggestion } from "./Suggestion";
import "@/assets/sass/main.scss";

const meta = {
    title: "Organismos/Suggestion",
    component: Suggestion,
    argTypes: {
        title: {
            type: "string",
        },
        content: {
            type: "string",
        },
        orientation: {
            type: "string",
        },
        button: {
            text: {
                type: "string",
            },
            href: {
                type: "string",
            },
        },
        children: {
            type: "symbol",
        },
    },
} satisfies Meta<typeof Suggestion>;

export default meta;
type Story = StoryObj<typeof Suggestion>;

export const Default: Story = {
    args: {
        title: "Aprenda interativamente.",
        content:
            "Esse projeto possui uma calculadora customizada para calcular uma função qualquer, inserida pelo usuário, que mostrará todo o processo de calcular a possível localização das raízes da sua expressão utilizando o método da bissecção e o teorema de Bolzano.",
        button: {
            text: "Ir para a calculadora",
            href: "/calculadora",
        },
    },
};

export const Right: Story = {
    args: {
        title: "Aprenda interativamente.",
        content:
            "Esse projeto possui uma calculadora customizada para calcular uma função qualquer, inserida pelo usuário, que mostrará todo o processo de calcular a possível localização das raízes da sua expressão utilizando o método da bissecção e o teorema de Bolzano.",
        orientation: "right",
        button: {
            text: "Ir para a calculadora",
            href: "/calculadora",
        },
    },
};

export const ButtonLess: Story = {
    args: {
        title: "Aprenda ainda mais!",
        content:
            "Encontre resultados e informações sobre muito além do teorema de Bolzano: O matemático italiano responsável pelo teorema, a lógica do método da bissecção, a técnica do zero de funções, o conceito de raízes de expressões de primeiro grau, segundo grau, etc. Tudo que estiver relacionado você pode encontrar aqui para aprender mais!",
    },
};

export const ButtonLessRight: Story = {
    args: {
        title: "Aprenda ainda mais!",
        orientation: "right",
        content:
            "Encontre resultados e informações sobre muito além do teorema de Bolzano: O matemático italiano responsável pelo teorema, a lógica do método da bissecção, a técnica do zero de funções, o conceito de raízes de expressões de primeiro grau, segundo grau, etc. Tudo que estiver relacionado você pode encontrar aqui para aprender mais!",
    },
};
