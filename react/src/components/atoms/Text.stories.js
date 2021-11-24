import React from 'react';
import Text from "./Text";
import {css} from '@emotion/react';

export default {
  title: 'components/atoms/Text',
  component: Text,
};
const Template = (args) => <Text {...args} />;
export const Quicksand_Medium_Black = Template.bind({});
Quicksand_Medium_Black.args = {
  label: 'quicksand-medium-black',
  text: 'Quicksand Medium Black',
}
export const Quicksand_Medium_White = Template.bind({});
Quicksand_Medium_White.args = {
  label: 'quicksand-medium-white',
  text: 'Quicksand Medium White',
}

export const NotoSansJP_Medium_Black = Template.bind({});
NotoSansJP_Medium_Black.args = {
  label: 'notosansjp-medium-black',
  text: 'NotoSansJP Medium Black',
}

export const NotoSansJP_Medium_Gray = Template.bind({});
NotoSansJP_Medium_Gray.args = {
  label: 'notosansjp-medium-gray',
  text: 'NotoSansJP Medium Gray',
}

export const NunitoSans_SemiBold_Black = Template.bind({});
NunitoSans_SemiBold_Black.args = {
  label: 'nunitosans-semibold-black',
  text: 'NunitoSans SemiBold Black',
}

export const NunitoSans_SemiBold_White = Template.bind({});
NunitoSans_SemiBold_White.args = {
  label: 'nunitosans-semibold-white',
  text: 'NunitoSans SemiBold White',
}

export const NunitoSans_Bold_Black = Template.bind({});
NunitoSans_Bold_Black.args = {
  label: 'nunitosans-bold-black',
  text: 'NunitoSans Bold Black',
}

export const NunitoSans_Bold_Gray = Template.bind({});
NunitoSans_Bold_Gray.args = {
  label: 'nunitosans-bold-gray',
  text: 'NunitoSans Bold Gray',
}

export const NunitoSans_Bold_Blue = Template.bind({});
NunitoSans_Bold_Blue.args = {
  label: 'nunitosans-bold-blue',
  text: 'NunitoSans Bold Blue',
}

