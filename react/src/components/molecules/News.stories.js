import React from 'react';
import {css} from "@emotion/react";
import News from "./News";
export default {
  title: 'components/molecules/News',
  component: News,
};
const Template = (args) => <News {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  sample: false,
  date: "2021.9.20",
  content: "news1"
}