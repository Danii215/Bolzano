import type { Meta, StoryObj } from "@storybook/react";
import { Burger } from "./Burger";
import "@/assets/sass/main.scss";

const meta = {
    title: "Átomos/Burger",
    component: Burger,
    argTypes: {
        onClick: {
            control: false,
            action: "clicked",
        },
    },
} satisfies Meta<typeof Burger>;

export default meta;
type Story = StoryObj<typeof Burger>;

export const Default: Story = {};
