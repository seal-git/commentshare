import React from 'react';
import {css} from "@emotion/react";
import {MemoryRouter, Route, Routes} from "react-router";
import PropTypes from "prop-types";
import PdfView from "./PdfView";
import PdfListPage from "../pages/PdfList";

export default {
    title: 'components/organisms/PdfView',
    component: PdfView,
    decorators: [
        story => (<MemoryRouter initialEntries={['/pdf/001']}>
                <Routes>
                    <Route
                        path={"/pdf/:pdfId"}
                        element={story()}/>
                </Routes>
            </MemoryRouter>
        )],
};
const Template = (args) => <PdfView {...args} />;
export const Basic = Template.bind({});
Basic.args = {
    sample: false,
    style: css`
    `
}

