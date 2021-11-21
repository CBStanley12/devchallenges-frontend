import React from 'react';
import Button from '.';

export default {
    component: Button,
    title: 'Button',
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    color: 'default',
    size: 'md',
    value: 'Button',
    disabled: false,
    disableShadow: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};