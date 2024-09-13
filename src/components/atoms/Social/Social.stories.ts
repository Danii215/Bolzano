import type { Meta, StoryObj } from "@storybook/react";
import { Social } from "./Social";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Social",
    component: Social,
    argTypes: {
        href: {
            type: "string",
        },
        icon: {
            type: "string",
        },
    },
} satisfies Meta<typeof Social>;

export default meta;
type Story = StoryObj<typeof Social>;

export const Instagram: Story = {
    parameters: {
        backgrounds: {
            default: "dark",
            values: [{ name: "dark", value: "#263238" }],
        },
    },
    args: {
        href: "/",
        icon: "instagram",
    },
};

export const Linkedin: Story = {
    parameters: {
        backgrounds: {
            default: "dark",
            values: [{ name: "dark", value: "#263238" }],
        },
    },
    args: {
        href: "/",
        icon: "linkedin",
    },
};
