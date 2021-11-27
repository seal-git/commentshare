import React from 'react';
import {css} from "@emotion/react";
import TestAPI from "./TestAPI";

export default {
  title: 'components/organisms/TestAPI',
  component: TestAPI,
};
const Template = (args) => <TestAPI {...args} />;
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
