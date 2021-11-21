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
    value: 'Button',
};