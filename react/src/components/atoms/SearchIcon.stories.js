import React from 'react';
import SearchIcon from "./SearchIcon";
import {css} from "@emotion/react";

export default {
  title: 'components/atoms/SearchIcon',
  component: SearchIcon,
};
const Template = (args) => <SearchIcon {...args}/>;

export const Sample = Template.bind({});
Sample.args = {
  label: 'sample'
}

export const Basic = Template.bind({});
Basic.args = {
  label: 'basic'
}
