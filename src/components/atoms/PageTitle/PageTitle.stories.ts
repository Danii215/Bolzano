import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "./PageTitle";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/PageTitle",
    component: PageTitle,
    argTypes: {
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
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
    args: {
        title: "Projeto de",
        titleHighlight: "Cálculo Numérico Computacional",
        subtitle:
            "Projeto explicativo sobre o matemático Bernard Bolzano, seu trabalho, e o funcionamento do método da bissecção no cálculo de zero de funções.",
    },
};

export const SubtitleLess: Story = {
    args: {
        title: "Sobre o Matemático",
        titleHighlight: "Bernard Bolzano",
    },
};
