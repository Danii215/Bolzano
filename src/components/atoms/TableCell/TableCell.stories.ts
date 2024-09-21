import type { Meta, StoryObj } from "@storybook/react";
import { TableCell } from "./TableCell";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/TableCell",
    component: TableCell,
    argTypes: {
        text: {
            type: "string",
        },
        header: {
            type: "boolean",
        },
    },
} satisfies Meta<typeof TableCell>;

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
    args: {
        text: "0",
        header: false,
    },
};

export const Header: Story = {
    args: {
        text: "K",
        header: true,
    },
};
