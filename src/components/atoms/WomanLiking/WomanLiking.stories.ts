import type { Meta, StoryObj } from "@storybook/react";
import { WomanLiking } from "./WomanLiking";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/WomanLiking",
    component: WomanLiking,
} satisfies Meta<typeof WomanLiking>;

export default meta;
type Story = StoryObj<typeof WomanLiking>;

export const Default: Story = {};
