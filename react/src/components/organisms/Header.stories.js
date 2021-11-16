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
  label: 'sample',
  style: css`
  `
}
export const Basic = Template.bind({});
Basic.args = {
  label: 'basic',
  style: css`
  `
}
