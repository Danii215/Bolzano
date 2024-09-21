import type { Meta, StoryObj } from "@storybook/react";
import { CalcForm } from "./CalcForm";
import "@/assets/sass/main.scss";

const meta = {
    title: "Moléculas/CalcForm",
    component: CalcForm,
    argTypes: {
        defineCalculationRequirements: Function,
    },
} satisfies Meta<typeof CalcForm>;

export default meta;
type Story = StoryObj<typeof CalcForm>;

export const Default: Story = {};
