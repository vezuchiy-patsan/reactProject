import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Button, ThemeButton} from './Button';
import {classNames} from "shared/lib/classNames/className";

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    ...Primary.args,
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    ...Primary.args,
    theme: ThemeButton.OUTLINE,
};

