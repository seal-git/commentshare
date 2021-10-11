import React from 'react';
import PanelText from "./PanelText";
import {Button} from "./Button";
import {css} from '@emotion/react';

export default {
  title: 'components/atoms/PanelText',
  component: PanelText,
};
const Template = (args) => <PanelText {...args} />;
export const Sample = Template.bind({});
Sample.args = {
  label: 'sample',
  text: 'sample',
  style: css`
    p{
      background-color: aquamarine;
    }
  `,
}
export const Basic = Template.bind({});
Basic.args = {
  label: 'basic',
  text: 'basic',
}
