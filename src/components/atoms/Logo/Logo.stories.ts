import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Logo",
    component: Logo,
    argTypes: {
        isBig: {
            type: "boolean",
        },
    },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
    parameters: {
        backgrounds: {
            default: "light",
            values: [{ name: "light", value: "#fff" }],
        },
    },
    args: {
        isBig: false,
    },
};

export const Big: Story = {
    parameters: {
        backgrounds: {
            default: "dark",
            values: [{ name: "dark", value: "#263238" }],
        },
    },
    args: {
        isBig: true,
    },
};
