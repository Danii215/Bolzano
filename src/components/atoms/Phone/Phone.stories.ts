import type { Meta, StoryObj } from "@storybook/react";
import { Phone } from "./Phone";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Phone",
    component: Phone,
} satisfies Meta<typeof Phone>;

export default meta;
type Story = StoryObj<typeof Phone>;

export const Default: Story = {};
