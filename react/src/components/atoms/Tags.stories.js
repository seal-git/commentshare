import React from 'react';
import Tags from "./Tags";
import {css} from '@emotion/react';

export default {
  title: 'components/atoms/Tags',
  component: Tags,
};
const Template = (args) => <Tags {...args} />;
export const Blue = Template.bind({});
Blue.args = {
  label: 'blue',
  text: 'Blue label',
}
export const Red = Template.bind({});
Red.args = {
  label: 'red',
  text: 'Red label',
}

export const Yellow = Template.bind({});
Yellow.args = {
  label: 'yellow',
  text: 'Yellow label',
}

export const Green = Template.bind({});
Green.args = {
  label: 'green',
  text: 'Green label',
}