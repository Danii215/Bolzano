import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import "@/assets/sass/main.scss";

import bernard from "@/assets/img/bernard.jpeg";

const meta = {
    title: "Átomos/Card",
    component: Card,
    argTypes: {
        title: {
            type: "string",
        },
        cta: {
            type: "string",
        },
        href: {
            type: "string",
        },
        image: {
            type: "symbol",
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: "Matemático Italiano Bernard Bolzano",
        cta: "Aprender",
        href: "/bolzano",
        image: bernard,
    },
};
