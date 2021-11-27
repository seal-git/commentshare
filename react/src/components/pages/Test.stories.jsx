import React from 'react';
import {css} from "@emotion/react";
import TestPage from "./Test";

export default {
  title: 'components/pages/Test',
  component: TestPage,
};
const Template = (args) => <TestPage {...args} />;
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
