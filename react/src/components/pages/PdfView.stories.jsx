import React from 'react';
import {css} from "@emotion/react";
import {MemoryRouter} from "react-router";
import PdfViewPage from "./PdfView";

export default {
  title: 'components/pages/PdfView',
  component: PdfViewPage,
  decorators: [
      story => (<MemoryRouter initialEntries={['/pdf']}>{story()}</MemoryRouter>)
  ],
};
const Template = (args) => <PdfViewPage {...args} />;
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
