import React from 'react';
import SvgIcons from "./SvgIcons";
import {css} from "@emotion/react";

export default {
  title: 'components/atoms/SvgIcons',
  component: SvgIcons,
};
const Template = (args) => <SvgIcons {...args}/>;

export const Timeline_White = Template.bind({});
Timeline_White.args = {
  label: 'timeline-white',
  style: css`
    height: 24px;
  `
}

export const Search_White = Template.bind({});
Search_White.args = {
  label: 'search-white',
  style: css`
    height: 24px;
  `
}

export const Upload_White = Template.bind({});
Upload_White.args = {
  label: 'upload-white',
  style: css`
    height: 24px;
  `
}

export const Notifications_Gray= Template.bind({});
Notifications_Gray.args = {
  label: 'notifications-gray',
  style: css`
    height: 24px;
  `
}

export const Direct_Message_Gray = Template.bind({});
Direct_Message_Gray.args = {
  label: 'direct-message-gray',
  style: css`
    height: 24px;
  `
}