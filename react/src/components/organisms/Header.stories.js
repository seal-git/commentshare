import React from 'react';
import {css} from "@emotion/react";
import Header from "./Header";

export default {
  title: 'components/organisms/Header',
  component: Header,
};
const Template = (args) => <Header {...args} />;
export const Sample = Template.bind({});
Sample.args = {
  style: css`
    background-color: black;
  `
}
export const Basic = Template.bind({});
Basic.args = {
  style: css`
    background-color: black;
  `
}
