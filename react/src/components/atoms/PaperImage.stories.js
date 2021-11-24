import React from 'react';
import PaperImage from "./PaperImage";
import {css} from "@emotion/react";

export default {
  title: 'components/atoms/PaperImage',
  component: PaperImage,
};
const Template = (args) => <PaperImage {...args}/>;

export const Basic = Template.bind({});
Basic.args = {
  label: 'basic'
}
