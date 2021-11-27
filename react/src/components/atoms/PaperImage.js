import {css} from "@emotion/react";
import PropTypes from "prop-types";

import Image from '../sample-data/paper-image.png';

//TODO: Iconコンポーネントにまとめる

const TemplateStyle = css`
  height: 100%;
`

const BasicStyle = css`
  ${TemplateStyle};
`;

function PaperImage(props) {
    let myStyle;
    if (props.label === 'basic') {
        myStyle = BasicStyle;
    }
    myStyle = css`
      ${myStyle};
      ${props.style};
    `

    return (
        <div css={myStyle}>
            <img src={Image} />
        </div>
    )
}

PaperImage.propTypes = {
    label: PropTypes.oneOf(['basic']),
    style: PropTypes.string,
}

PaperImage.defaultProps = {
    label: 'basic'
}


export default PaperImage;