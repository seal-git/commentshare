import {css} from "@emotion/react";
import PropTypes from "prop-types";

import Image from '../sample-data/user-icon-image.png';

//TODO: Iconコンポーネントにまとめる


function UserIconImage(props) {
    let wrapperStyle = css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      img {
        display: block;
        height: 100%;
        width: auto;
      }
    `;
    wrapperStyle = css`
      ${wrapperStyle};
      ${props.style};
    `

    return (
        <div css={wrapperStyle}>
            <img src={Image} />
        </div>
    )
}

UserIconImage.propTypes = {
    label: PropTypes.oneOf(['basic']),
    style: PropTypes.object,
}

UserIconImage.defaultProps = {
    label: 'basic'
}


export default UserIconImage;