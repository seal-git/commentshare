import React from 'react';
import {css} from "@emotion/react";
import UploadPanel from './UploadPanel';

export default {
  title: 'components/molecules/UploadPanel',
  component: UploadPanel,
};
const Template = (args) => <UploadPanel {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  style: css`
    width: 200px;
    height: 40px;
    background-color: black;
  `
}
