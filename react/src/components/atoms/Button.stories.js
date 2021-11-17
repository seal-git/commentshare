import React from 'react';
import Button from "./Button";
import {css} from '@emotion/react';

export default {
  title: 'components/atoms/Button',
  component: Button,
};
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  label: 'primary',
  text: 'Continue with Google',
}
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'secondary',
  text: 'Continue with Email',
}
