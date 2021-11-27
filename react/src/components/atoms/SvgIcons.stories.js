import React from 'react';
import SvgIcons from "./SvgIcons";
import {css} from "@emotion/react";

export default {
  title: 'components/atoms/SvgIcons',
  component: SvgIcons,
};
const Template = (args) => <SvgIcons {...args}/>;

export const Timeline = Template.bind({});
Timeline.args = {
  label: 'timeline',
  style: css`
    height: 24px;
  `
}

export const Search = Template.bind({});
Search.args = {
  label: 'search',
  style: css`
    height: 24px;
  `
}

export const Upload = Template.bind({});
Upload.args = {
  label: 'upload',
  style: css`
    height: 24px;
  `
}

export const Notifications= Template.bind({});
Notifications.args = {
  label: 'notifications',
  style: css`
    height: 24px;
  `
}

export const DirectMessage = Template.bind({});
DirectMessage.args = {
  label: 'direct-message',
  style: css`
    height: 24px;
  `
}