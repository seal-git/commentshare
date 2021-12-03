import {css} from "@emotion/react";
import PropTypes from "prop-types";

import Image from '../sample-data/user-icon-image.png';

//TODO: Iconコンポーネントにまとめる


function UserIconImage(props) {
    let myStyle = css`
      height: 100%;
      img{
        height: 100%;
        width: auto;
      }
    `;
    if (props.label === 'basic') {
        myStyle = css`
          ${myStyle};
        `;
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