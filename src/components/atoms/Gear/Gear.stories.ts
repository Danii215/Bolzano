import type { Meta, StoryObj } from "@storybook/react";
import { Gear } from "./Gear";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Gear",
    component: Gear,
} satisfies Meta<typeof Gear>;

export default meta;
type Story = StoryObj<typeof Gear>;

export const Default: Story = {};
