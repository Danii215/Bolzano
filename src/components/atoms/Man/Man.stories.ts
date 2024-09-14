import type { Meta, StoryObj } from "@storybook/react";
import { Man } from "./Man";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Man",
    component: Man,
} satisfies Meta<typeof Man>;

export default meta;
type Story = StoryObj<typeof Man>;

export const Default: Story = {};
