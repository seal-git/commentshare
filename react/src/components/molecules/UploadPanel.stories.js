import React from 'react';
import {css} from "@emotion/react";
import UploadPanel from './UploadPanel';

export default {
  title: 'components/molecules/UploadPanel',
  component: UploadPanel,
};
const Template = (args) => <UploadPanel {...args} />;
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
