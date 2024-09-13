import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import "@/assets/sass/main.scss";

const meta = {
    title: "Moléculas/Footer",
    component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
