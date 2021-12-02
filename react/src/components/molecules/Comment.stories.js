import React from 'react';
import {css} from "@emotion/react";
import Comment from "./Comment";

export default {
    title: 'components/molecules/Comment',
    component: Comment,
};
const Template = (args) => <Comment {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    sample: false,
    comment: {
        comment: "sss",
        rect: {x: 144.5, y: 129.5, w: 59.5, h: 48.5}
    },

}