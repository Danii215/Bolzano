import type { Meta, StoryObj } from "@storybook/react";
import { LoadingSkeleton } from "./LoadingSkeleton";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/LoadingSkeleton",
    component: LoadingSkeleton,
    argTypes: {
        width: {
            type: "number",
        },
        height: {
            type: "number",
        },
    },
} satisfies Meta<typeof LoadingSkeleton>;

export default meta;
type Story = StoryObj<typeof LoadingSkeleton>;

export const Default: Story = {
    args: {
        width: 500,
        height: 500,
    },
};
