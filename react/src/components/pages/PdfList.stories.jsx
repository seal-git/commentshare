import React from 'react';
import {css} from "@emotion/react";
import {MemoryRouter} from "react-router";
import PdfListPage from "./PdfList";

export default {
  title: 'components/pages/PdfList',
  component: PdfListPage,
  decorators: [
      story => (<MemoryRouter initialEntries={['001']}>{story()}</MemoryRouter>)
  ],
};
const Template = (args) => <PdfListPage {...args} />;
export const Sample = Template.bind({});
Sample.args = {
  label: 'sample',
  style: css`
  `
}
export const Basic = Template.bind({});
Basic.args = {
  label: 'basic',
  style: css`
  `
}
