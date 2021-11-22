import React from 'react';
import Button from '.';

export default {
    component: Button,
    title: 'Text Button',
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'text',
    color: 'default',
    size: 'md',
    value: 'Button',
    disabled: false,
    disableShadow: false,
};

export const Primary = Template.bind({});
Primary.args = {
    ...Default.args,
    color: 'primary',
}

export const Secondary = Template.bind({});
Secondary.args = {
    ...Default.args,
    color: 'secondary',
}

export const Danger = Template.bind({});
Danger.args = {
    ...Default.args,
    color: 'danger',
}

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

export const PrimaryWithStartIcon = Template.bind({});
PrimaryWithStartIcon.args = {
    ...Default.args,
    color: 'primary',
    startIcon: 'local_grocery_store',
}

export const PrimaryWithEndIcon = Template.bind({});
PrimaryWithEndIcon.args = {
    ...Default.args,
    color: 'primary',
    endIcon: 'local_grocery_store',
}