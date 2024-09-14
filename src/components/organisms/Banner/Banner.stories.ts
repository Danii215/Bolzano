import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";
import "@/assets/sass/main.scss";

const meta = {
    title: "Organismos/Banner",
    component: Banner,
    argTypes: {
        text: {
            title: {
                type: "string",
            },
            titleHighlight: {
                type: "string",
            },
            subtitle: {
                type: "string",
            },
        },
        children: {
            type: "symbol",
        },
    },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
    args: {
        text: {
            title: "Projeto de",
            titleHighlight: "Cálculo Numérico Computacional",
            subtitle:
                "Projeto explicativo sobre o matemático Bernard Bolzano, seu trabalho, e o funcionamento do método da bissecção no cálculo de zero de funções.",
        },
    },
};

export const DescriptionLess: Story = {
    args: {
        text: {
            title: "Sobre o Matemático",
            titleHighlight: "Bernard Bolzano",
        },
    },
};
