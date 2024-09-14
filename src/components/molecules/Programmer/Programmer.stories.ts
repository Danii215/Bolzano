import type { Meta, StoryObj } from "@storybook/react";
import { Programmer } from "./Programmer";
import "@/assets/sass/main.scss";

const meta = {
    title: "Moléculas/Programmer",
    component: Programmer,
} satisfies Meta<typeof Programmer>;

export default meta;
type Story = StoryObj<typeof Programmer>;

export const Default: Story = {};
