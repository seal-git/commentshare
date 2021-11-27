import React from 'react';
import {css} from "@emotion/react";
import SearchPanel from './SearchPanel';

export default {
  title: 'components/molecules/SearchPanel',
  component: SearchPanel,
};
const Template = (args) => <SearchPanel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'basic',
  search_icon_css: css` `
}
