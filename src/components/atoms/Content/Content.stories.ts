import type { Meta, StoryObj } from "@storybook/react";
import { Content } from "./Content";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Content",
    component: Content,
    argTypes: {
        title: {
            type: "string",
        },
        children: {
            type: "symbol",
        },
    },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof Content>;

export const Default: Story = {
    args: {
        title: "Aprenda interativamente.",
    },
};
