import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';


import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {AppLink, AppLinkTheme} from "./AppLink";


export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args:{
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY
};

Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    theme: AppLinkTheme.SECONDARY,
};

Secondary.decorators = [ThemeDecorator(Theme.DARK)];




