import type { Meta, StoryObj } from "@storybook/react";
import { Window } from "./Window";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Window",
    component: Window,
} satisfies Meta<typeof Window>;

export default meta;
type Story = StoryObj<typeof Window>;

export const Default: Story = {};
