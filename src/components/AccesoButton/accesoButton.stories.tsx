import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import AccesoButton, { AccesoButtonProps } from "./accesoButton";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default {
  title: "Components/AccesoButton",  
  component: AccesoButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<AccesoButtonProps> = (args) => <AccesoButton {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Click", icon: "pi pi-check" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "Click", icon: "pi pi-apple" };
