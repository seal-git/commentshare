import React from 'react';
import {MemoryRouter, Route, Routes} from "react-router";
import {css} from "@emotion/react";
import Header from "./Header";

export default {
    title: 'components/organisms/Header',
    component: Header,
    decorators: [
        story => (<MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route
                        path={"/"}
                        element={story()}/>
                </Routes>
            </MemoryRouter>
        )],
};
const Template = (args) => <Header {...args} />;
export const Basic = Template.bind({});
Basic.args = {
    sample: false,
}
