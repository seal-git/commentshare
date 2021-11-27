import React from 'react';
import PropTypes from 'prop-types';
import {css} from "@emotion/react";

const TemplateStyle = css`
  color: #000000;
  font-size: 30px;
`

const Quicksand_Medium_BlackStyle = css`
  ${TemplateStyle};
  font-family: 'Quicksand', sans-serif;
  color: #000000E5;
  font-weight: 500;
  font-style: normal;
`;

const Quicksand_Medium_WhiteStyle = css`
  ${TemplateStyle};
  font-family: 'Quicksand', sans-serif;
  color: #FFFFFF;
  font-weight: 500;
  font-style: normal;
`;

const NotoSansJP_Medium_BlackStyle = css`
  ${TemplateStyle};
  font-family: 'Noto Sans JP', sans-serif;
  color: #000000E5;
  font-weight: 500;
  font-style: normal;
`;

const NotoSansJP_Medium_GrayStyle = css`
  ${TemplateStyle};
  font-family: 'Noto Sans JP', sans-serif;
  color: #00000080;
  font-weight: 500;
  font-style: normal;
`;

const NunitoSans_SemiBold_BlackStyle = css`
  ${TemplateStyle};
  font-family: 'Nunito Sans', sans-serif;
  color: #000000E5;
  font-weight: 600;
  font-style: normal;
`;

const NunitoSans_SemiBold_WhiteStyle = css`
  ${TemplateStyle};
  font-family: 'Nunito Sans', sans-serif;
  color: #FFFFFF;
  font-weight: 600;
  font-style: normal;
`;

const NunitoSans_Bold_BlackStyle = css`
  ${TemplateStyle};
  font-family: 'Nunito Sans', sans-serif;
  color: #000000E5;
  font-weight: 700;
  font-style: normal;
`;


const NunitoSans_Bold_GrayStyle = css`
  ${TemplateStyle};
  font-family: 'Nunito Sans', sans-serif;
  color: #00000080;
  font-weight: 700;
  font-style: normal;
`;

const NunitoSans_Bold_BlueStyle = css`
  ${TemplateStyle};
  font-family: 'Nunito Sans', sans-serif;
  color: #4285BB;
  font-weight: 700;
  font-style: normal;
`;


function Text(props) {
    let myStyle;
    if (props.label === 'quicksand-medium-black') {
        myStyle = Quicksand_Medium_BlackStyle;
    } else if (props.label === 'quicksand-medium-white') {
        myStyle = Quicksand_Medium_WhiteStyle;
    } else if (props.label === 'notosansjp-medium-black') {
        myStyle = NotoSansJP_Medium_BlackStyle;
    } else if (props.label === 'notosansjp-medium-gray') {
        myStyle = NotoSansJP_Medium_GrayStyle;
    } else if (props.label === 'nunitosans-semibold-black') {
        myStyle = NunitoSans_SemiBold_BlackStyle;
    } else if (props.label === 'nunitosans-semibold-white') {
        myStyle = NunitoSans_SemiBold_WhiteStyle;
    } else if (props.label === 'nunitosans-bold-black') {
        myStyle = NunitoSans_Bold_BlackStyle;
    } else if (props.label === 'nunitosans-bold-gray') {
        myStyle = NunitoSans_Bold_GrayStyle;
    } else if (props.label === 'nunitosans-bold-blue') {
        myStyle = NunitoSans_Bold_BlueStyle;
    }
    myStyle = css`
      ${myStyle};
      ${props.style};
    `
    return (
        <div css={myStyle}><p>{props.text}</p></div>
    )
}

Text.propTypes = {
    text: PropTypes.string.isRequired
};


export default Text;