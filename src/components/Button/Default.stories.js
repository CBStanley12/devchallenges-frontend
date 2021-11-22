import React from 'react';
import Button from '.';

export default {
    component: Button,
    title: 'Default Button',
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
    attributes: {
        name: 'Default Button',
        type: 'button',
        /*
        form: '',
        formaction: '',
        formenctype: '',
        formmethod: '',
        formnovalidate: '',
        formtarget: '',
        */
    },
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

export const DefaultWithStartIcon = Template.bind({});
DefaultWithStartIcon.args = {
    ...Default.args,
    startIcon: 'local_grocery_store',
}

export const DefaultWithEndIcon = Template.bind({});
DefaultWithEndIcon.args = {
    ...Default.args,
    endIcon: 'local_grocery_store',
}