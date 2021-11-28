import { Input } from '@mui/material';
import React from 'react';
import Card from '.';

export default {
    component: Card,
    title: 'Card',
};

const Template = args => <Card {...args} />;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
    title: 'Button Component',
    tag: 'Front-end Developer Path',
    src: 'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FButtonThumbnail.png%3Falt%3Dmedia%26token%3D3ddbedcf-a08b-4144-928f-e551b4bcee80&w=1920&q=75',
    alt: 'Project: Button Component',
};

export const InputComponent = Template.bind({});
InputComponent.args = {
    title: 'Input Component',
    tag: 'Front-end Developer Path',
    src: 'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FInputThumbnail.png%3Falt%3Dmedia%26token%3D73685593-9026-42a6-8c68-00243071250e&w=1920&q=75',
    alt: 'Project: Input Component'
}