import type { Meta, StoryObj } from "@storybook/react";
import { Message } from "./Message";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Message",
    component: Message,
    argTypes: {
        success: {
            type: "boolean",
        },
        message: {
            type: "string",
        },
    },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
    args: {
        message: "Ocorreu um erro. Verifique as suas inserções.",
        success: false,
    },
};

export const Success: Story = {
    args: {
        message: "Tudo certo!",
        success: true,
    },
};
