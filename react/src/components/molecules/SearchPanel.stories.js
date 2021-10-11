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
  label: 'sample',
  style: css`
    height: 40px;
  `
}
export const Basic = Template.bind({});
Basic.args = {
  label: 'basic',
  style: css`
    height: 40px;
  `
}
