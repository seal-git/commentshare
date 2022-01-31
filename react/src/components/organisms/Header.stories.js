import React from 'react';
import {css} from "@emotion/react";
import Header from "./Header";

export default {
  title: 'components/organisms/Header',
  component: Header,
};
const Template = (args) => <Header {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  sample: false,
}
