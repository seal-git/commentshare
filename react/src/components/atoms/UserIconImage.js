import {css} from "@emotion/react";
import PropTypes from "prop-types";

import Image from '../assets/user-icon-image.png';

//TODO: Iconコンポーネントにまとめる

const TemplateStyle = css`
  height: 100%;
`

const BasicStyle = css`
  ${TemplateStyle};
`;

function UserIconImage(props) {
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

UserIconImage.propTypes = {
    label: PropTypes.oneOf(['basic']),
    style: PropTypes.string,
}

UserIconImage.defaultProps = {
    label: 'basic'
}


export default UserIconImage;