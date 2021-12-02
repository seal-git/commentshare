import React from 'react';
import {css} from "@emotion/react";
import HomeContent from "./HomeContent";
import {MemoryRouter} from "react-router";

export default {
    title: 'components/organisms/HomeContent',
    component: HomeContent,
    decorators: [
        story => (
            <MemoryRouter initialEntries={['001']}>{story()}</MemoryRouter>)
    ],
};
const Template = (args) => <HomeContent {...args} />;
export const Basic = Template.bind({});
Basic.args = {
    sample: false,
    newsList: [
        {
            date: "2021.9.3",
            content: "news1"
        },
        {
            date: "2021.9.20",
            content: "news2"
        },
        {
            date: "2021.9.20",
            content: "news2"
        },
        {
            date: "2021.9.20",
            content: "news2"
        },
        {
            date: "2021.9.20",
            content: "news2"
        },
    ]
}
