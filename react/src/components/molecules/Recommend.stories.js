import React from 'react';
import {css} from "@emotion/react";
import Recommend from "./Recommend";
import {MemoryRouter} from "react-router";

export default {
  title: 'components/molecules/Recommend',
  component: Recommend,
  decorators: [
      story => (<MemoryRouter initialEntries={['001']}>{story()}</MemoryRouter>)
  ],
};
const Template = (args) => <Recommend {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  sample: false,
  text: "SPAN: Subgraph Prediction Attention Network for Dynamic Graphs"
}