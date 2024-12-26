import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';


import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {LoaderShare} from "shared/ui/Loader/ui/LoaderShare";



export default {
    title: 'shared/Loader',
    component: LoaderShare,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoaderShare>;

const Template: ComponentStory<typeof LoaderShare> = (args) => <LoaderShare {...args} />;

export const Light = Template.bind({});
Light.args = {

};


export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];




