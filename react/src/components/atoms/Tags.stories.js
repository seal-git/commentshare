import React from 'react';
import Tags from "./Tags";
import {css} from '@emotion/react';

export default {
  title: 'components/atoms/Tags',
  component: Tags,
};
const Template = (args) => <Tags {...args} />;
export const Sample = Template.bind({});
Sample.args = {
  label: 'sample',
  text: 'sample',
}
export const Basic = Template.bind({});
Basic.args = {
  label: 'basic',
  text: 'basic',
}
