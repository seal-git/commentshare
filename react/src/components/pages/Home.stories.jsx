import React from 'react';
import {css} from "@emotion/react";
import HomePage from "./Home";

export default {
  title: 'components/pages/Home',
  component: HomePage,
};
const Template = (args) => <HomePage {...args} />;
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
