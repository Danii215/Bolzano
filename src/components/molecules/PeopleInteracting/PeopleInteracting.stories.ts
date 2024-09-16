import type { Meta, StoryObj } from "@storybook/react";
import { PeopleInteracting } from "./PeopleInteracting";
import "@/assets/sass/main.scss";

const meta = {
    title: "Moléculas/PeopleInteracting",
    component: PeopleInteracting,
} satisfies Meta<typeof PeopleInteracting>;

export default meta;
type Story = StoryObj<typeof PeopleInteracting>;

export const Default: Story = {};
