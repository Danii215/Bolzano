import type { Meta, StoryObj } from "@storybook/react";
import { ManHoldingPhone } from "./ManHoldingPhone";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/ManHoldingPhone",
    component: ManHoldingPhone,
} satisfies Meta<typeof ManHoldingPhone>;

export default meta;
type Story = StoryObj<typeof ManHoldingPhone>;

export const Default: Story = {};
