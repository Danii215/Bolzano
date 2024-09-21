import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/TextInput",
    component: TextInput,
    argTypes: {
        id: {
            type: "string",
        },
        label: {
            type: "string",
        },
        placeholder: {
            type: "string",
        },
    },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
    args: {
        id: "test",
        label: "Input de exemplo.",
        placeholder: "Ex: danilosm215@gmail.com",
    },
};
