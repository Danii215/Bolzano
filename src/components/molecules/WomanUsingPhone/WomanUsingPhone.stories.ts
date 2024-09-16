import type { Meta, StoryObj } from "@storybook/react";
import { WomanUsingPhone } from "./WomanUsingPhone";
import "@/assets/sass/main.scss";

const meta = {
    title: "Moléculas/WomanUsingPhone",
    component: WomanUsingPhone,
} satisfies Meta<typeof WomanUsingPhone>;

export default meta;
type Story = StoryObj<typeof WomanUsingPhone>;

export const Default: Story = {};
