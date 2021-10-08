import React from 'react';
import PanelText from "./PanelText";
import {Button} from "./Button";

export default {
  title: 'components/atoms/PanelText',
  component: PanelText,
};
const Template = (args) => <PanelText {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  text: 'aabbb'
}
