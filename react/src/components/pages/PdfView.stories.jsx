import React from 'react';
import {css} from "@emotion/react";
import {MemoryRouter, Route, Routes} from "react-router";
import PdfViewPage from "./PdfView";
import PropTypes from "prop-types";

export default {
    title: 'components/pages/PdfView',
    component: PdfViewPage,
    decorators: [
        story => (<MemoryRouter initialEntries={['/pdf/001']}>
                <Routes>
                    <Route
                        path={"/pdf/:pdfId"}
                        element={story()}/>
                    <Route
                        path={"/pdf"}
                        element={story()}/>
                </Routes>
            </MemoryRouter>
        )],
};
const Template = (args) => <PdfViewPage {...args} />;
export const Basic = Template.bind({});
Basic.args = {
    sample: false,
    style: css`
    `
}

