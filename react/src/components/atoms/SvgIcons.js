import React from 'react';
import {css} from "@emotion/react";
import PropTypes from "prop-types";

import {ReactComponent as SearchIcon} from '../assets/search-icon.svg';
import {ReactComponent as TimelineIcon} from '../assets/timeline-icon.svg';
import {ReactComponent as UploadIcon} from '../assets/upload-icon.svg';
import {ReactComponent as NotificationsIcon} from '../assets/notifications-icon.svg';
import {ReactComponent as DirectMessageIcon} from '../assets/direct-message-icon.svg';

function SvgIcons(props) {
    let wrapperStyle = css`
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    let icon;
    if (props.label === 'timeline-white') {
        icon = <TimelineIcon/>
        wrapperStyle =css`
          ${wrapperStyle};
          svg{
            fill: white;
          }
        `
    } else if (props.label === 'search-white') {
        icon = <SearchIcon/>
        wrapperStyle =css`
          ${wrapperStyle};
          svg{
            fill: white;
          }
        `
    } else if (props.label === 'upload-white') {
        icon = <UploadIcon/>
        wrapperStyle =css`
          ${wrapperStyle};
          svg{
            fill: white;
          }
        `
    } else if (props.label === 'notifications-gray') {
        icon = <NotificationsIcon/>
        wrapperStyle =css`
          ${wrapperStyle};
          svg{
            fill: gray;
          }
        `
    } else if (props.label === 'direct-message-gray') {
        icon = <DirectMessageIcon/>
        wrapperStyle =css`
          ${wrapperStyle};
          svg{
            fill: gray;
          }
        `
    }
    wrapperStyle = css`
      ${wrapperStyle};
      ${props.style};
    `

    return (
        <div css={wrapperStyle}>
            {icon}
        </div>
    )

}

SvgIcons.propTypes = {
    label: PropTypes.oneOf([
        'timeline-white',
        'search-white',
        'upload-white',
        'notifications-gray',
        'direct-message-gray'
    ]),
    style: PropTypes.object,
}

SvgIcons.defaultProps = {
    label: 'search'
}


export default SvgIcons;