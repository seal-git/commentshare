import React from 'react';
import {css} from "@emotion/react";
import ContentArea from "./ContentArea";
export default {
  title: 'components/molecules/ContentArea',
  component: ContentArea,
};
const Template = (args) => <ContentArea {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  sample: false,
}