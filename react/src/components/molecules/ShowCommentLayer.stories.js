import React from 'react';
import {css} from "@emotion/react";
import ShowCommentLayer from "./ShowCommentLayer";

export default {
    title: 'components/molecules/ShowCommentLayer',
    component: ShowCommentLayer,
};
const Template = (args) => <ShowCommentLayer {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    sample: false,
    commentList: [
        {
            comment: "sss",
            rect: {x: 144.5, y: 129.5, w: 59.5, h: 48.5}
        },
        {
            comment: "aaa",
            rect: {x: 184.5, y: 116.5, w: 77.5, h: 87.5}
        },
    ],
    mouseX: 185,
    mouseY: 130,
    popupVisible:true,

}