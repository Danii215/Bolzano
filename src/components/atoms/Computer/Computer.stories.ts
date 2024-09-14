import type { Meta, StoryObj } from "@storybook/react";
import { Computer } from "./Computer";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Computer",
    component: Computer,
} satisfies Meta<typeof Computer>;

export default meta;
type Story = StoryObj<typeof Computer>;

export const Default: Story = {};
