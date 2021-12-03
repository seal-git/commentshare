import React from 'react';
import {MemoryRouter} from "react-router-dom";
import {css} from "@emotion/react";
import HomePage from "./Home";

export default {
    title: 'components/pages/Home',
    component: HomePage,
    decorators: [
        story => (
            <MemoryRouter initialEntries={['001']}>{story()}</MemoryRouter>)
    ],
};
const Template = (args) => <HomePage {...args} />;
export const Basic = Template.bind({});
Basic.args = {
    sample: false,
    style: css`
    `
}
