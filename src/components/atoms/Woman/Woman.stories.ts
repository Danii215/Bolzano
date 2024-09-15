import type { Meta, StoryObj } from "@storybook/react";
import { Woman } from "./Woman";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Woman",
    component: Woman,
} satisfies Meta<typeof Woman>;

export default meta;
type Story = StoryObj<typeof Woman>;

export const Default: Story = {};
