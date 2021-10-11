import React from 'react';
import UploadIcon from "./UploadIcon";
import {css} from "@emotion/react";

export default {
  title: 'components/atoms/UploadIcon',
  component: UploadIcon,
};
const Template = (args) => <UploadIcon {...args}/>;
export const Basic = Template.bind({});
Basic.args = {
  style: css`
    width: 100px;
    height: 100px;
    background-color: black;
  `
}
export const Small = Template.bind({});
Small.args = {
  style: css`
    width: 24px;
    height: 24px;
    background-color: black;
  `
}
