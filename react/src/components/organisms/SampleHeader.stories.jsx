import React from 'react';

import { SampleHeader } from './SampleHeader';

export default {
  title: 'components/organisms/SampleHeader',
  component: SampleHeader,
};

const Template = (args) => <SampleHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
