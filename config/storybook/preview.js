import "!style-loader!css-loader!sass-loader!../../src/app/styles/index.scss";
// import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import "../../src/app/styles/index.scss";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {addDecorator} from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // decorators: [StyleDecorator]
}

addDecorator(StyleDecorator);


