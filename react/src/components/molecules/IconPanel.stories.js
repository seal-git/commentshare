import React from 'react';
import {css} from "@emotion/react";
import IconPanel from "./IconPanel";
export default {
  title: 'components/molecules/IconPanel',
  component: IconPanel,
};
const Template = (args) => <IconPanel {...args} />;

export const Search = Template.bind({});
Search.args = {
  label: 'search',
  sample: false,
}
export const Upload = Template.bind({});
Upload.args = {
  label: 'upload',
  sample: false,
}
export const Timeline = Template.bind({});
Timeline.args = {
  label: 'timeline',
  sample: false,
}