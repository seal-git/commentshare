import React from 'react';
import UserIconImage from "./UserIconImage";
import {css} from "@emotion/react";

export default {
  title: 'components/atoms/UserIconImage',
  component: UserIconImage,
};
const Template = (args) => <UserIconImage {...args}/>;

export const Basic = Template.bind({});
Basic.args = {
  label: 'basic'
}
