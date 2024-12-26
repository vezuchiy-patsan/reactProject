import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button, ThemeButton} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
// import  "app/styles/index.scss";

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
    children: 'Text',
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
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    ...Outline.args,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];


