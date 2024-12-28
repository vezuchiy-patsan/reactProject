import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button, ButtonSize, ButtonTheme} from './Button';
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
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    ...Primary.args,
    theme: ButtonTheme.OUTLINE,
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    ...Outline.args,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    ...Primary.args,
    theme: ButtonTheme.BACKGROUND
};
export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    ...Primary.args,
    theme: ButtonTheme.BACKGROUND_INVERTED
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    ...Outline.args,
    size: ButtonSize.L
};
export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    ...Outline.args,
    size: ButtonSize.XL
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    ...SquareSizeM.args,
    size: ButtonSize.L,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    ...SquareSizeM.args,
    size: ButtonSize.XL,
};



