import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import "@/assets/sass/main.scss";

const meta = {
    title: "Moléculas/Table",
    component: Table,
    argTypes: {
        header: Array<string>,
        rows: Array<Array<string>>,
    },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {
        header: ["K", "a", "b", "Média", "f(a)", "f(Média)", "Sinal", "Erro"],
        rows: [
            ["0", "0", "0", "0", "0", "0", "0", "0"],
            ["1", "0", "0", "0", "0", "0", "0", "0"],
            ["2", "0", "0", "0", "0", "0", "0", "0"],
            ["3", "0", "0", "0", "0", "0", "0", "0"],
            ["4", "0", "0", "0", "0", "0", "0", "0"],
            ["5", "0", "0", "0", "0", "0", "0", "0"],
            ["6", "0", "0", "0", "0", "0", "0", "0"],
            ["7", "0", "0", "0", "0", "0", "0", "0"],
            ["8", "0", "0", "0", "0", "0", "0", "0"],
        ],
    },
};
