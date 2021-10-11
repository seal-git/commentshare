import React from 'react';
import {css} from "@emotion/react";
import SearchPanel from './SearchPanel';

export default {
  title: 'components/molecules/SearchPanel',
  component: SearchPanel,
};
const Template = (args) => <SearchPanel {...args} />;
export const Sample = Template.bind({});
Sample.args = {
  style: css`
    width: 200px;
    height: 40px;
    background-color: black;
  `
}
export const Basic = Template.bind({});
Basic.args = {
  style: css`
    width: 200px;
    height: 40px;
    background-color: black;
  `
}
