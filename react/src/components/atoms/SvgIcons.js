import React from 'react';
import {css} from "@emotion/react";
import PropTypes from "prop-types";

import {ReactComponent as SearchIcon} from '../assets/search-icon.svg';
import {ReactComponent as TimelineIcon} from '../assets/timeline-icon.svg';
import {ReactComponent as UploadIcon} from '../assets/upload-icon.svg';
import {ReactComponent as NotificationsIcon} from '../assets/notifications-icon.svg';
import {ReactComponent as DirectMessageIcon} from '../assets/direct-message-icon.svg';



//TODO: Iconコンポーネントにまとめる

const TemplateStyle = css`
  height: 100%;
`

const Search_WhiteSytle = css`
  ${TemplateStyle};
  svg {
    fill: white;
  }
`;

const Timeline_WhiteStyle = css`
  ${TemplateStyle};
  svg {
    fill: white;
  }
`;

const Upload_WhiteStyle = css`
  ${TemplateStyle};
  svg {
    fill: white;
  }
`;

const Notifications_GrayStyle = css`
  ${TemplateStyle};
  svg {
    fill: gray;
  }
`;

const Direct_Message_GrayStyle = css`
  ${TemplateStyle};
  svg {
    fill: gray;
  }
`;


function SvgIcons(props) {
    let myStyle;
    let icon;
    if (props.label === 'timeline-white') {
        myStyle = css`
          ${Timeline_WhiteStyle};
          ${props.style};
        `
        icon = <div css={myStyle}><TimelineIcon/></div>
    } else if (props.label === 'search-white') {
        myStyle = css`
          ${Search_WhiteSytle};
          ${props.style};
        `
        icon = <div css={myStyle}><SearchIcon/></div>
    } else if (props.label === 'upload-white') {
        myStyle = css`
          ${Upload_WhiteStyle};
          ${props.style};
        `
        icon = <div css={myStyle}><UploadIcon/></div>
    } else if (props.label === 'notifications-gray') {
        myStyle = css`
          ${Notifications_GrayStyle};
          ${props.style};
        `
        icon = <div css={myStyle}><NotificationsIcon/></div>
    } else if (props.label === 'direct-message-gray') {
        myStyle = css`
          ${Direct_Message_GrayStyle};
          ${props.style};
        `
        icon = <div css={myStyle}><DirectMessageIcon/></div>
    }


    return (
        <div>
            {icon}
        </div>
    )


    // return (
    // 	<div css={myStyle}>
    //         <TimelineIcon/>
    //     </div>
    // 	) 
}

SvgIcons.propTypes = {
    label: PropTypes.oneOf([
        'timeline-white',
        'search-white',
        'upload-white',
        'notifications-gray',
        'direct-message-gray'
    ]),
    style: PropTypes.string,
}

SvgIcons.defaultProps = {
    label: 'search'
}


export default SvgIcons;