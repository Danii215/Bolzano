import type { Meta, StoryObj } from "@storybook/react";
import { CardList } from "./CardList";
import "@/assets/sass/main.scss";

const meta = {
    title: "Moléculas/CardList",
    component: CardList,
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {};
