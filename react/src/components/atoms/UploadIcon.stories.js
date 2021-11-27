import React from 'react';
import UploadIcon from "./UploadIcon";
import {css} from "@emotion/react";

export default {
  title: 'components/atoms/UploadIcon',
  component: UploadIcon,
};
const Template = (args) => <UploadIcon {...args}/>;
export const Sample = Template.bind({});
Sample.args = {
  label: 'sample',
  style: css`
    height: 24px;
  `
}
export const Basic = Template.bind({});
Basic.args = {
  label: 'basic',
  style: css`
    height: 24px;
  `
}
