import type { Meta, StoryObj } from "@storybook/react";
import { CallToCalc } from "./CallToCalc";
import "@/assets/sass/main.scss";

const meta = {
    title: "Moléculas/CallToCalc",
    component: CallToCalc,
} satisfies Meta<typeof CallToCalc>;

export default meta;
type Story = StoryObj<typeof CallToCalc>;

export const Default: Story = {};
