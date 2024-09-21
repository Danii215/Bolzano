import type { Meta, StoryObj } from "@storybook/react";
import { Calculator } from "./Calculator";
import "@/assets/sass/main.scss";

const meta = {
    title: "Organismos/Calculator",
    component: Calculator,
} satisfies Meta<typeof Calculator>;

export default meta;
type Story = StoryObj<typeof Calculator>;

export const Default: Story = {};
