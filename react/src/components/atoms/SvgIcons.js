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
  svg {
    height: 100%;
    width: auto;
    fill: white;
  }

  height: 100%;


  svg {
    background-color: #1E2530;
  }
`

const SearchStyle = css`
  ${TemplateStyle};
`;

const TimelineStyle = css`
  ${TemplateStyle};
`;

const UploadStyle = css`
  ${TemplateStyle};
`;

const NotificationsStyle = css`
  ${TemplateStyle};
`;

const DirectMessageStyle = css`
  ${TemplateStyle};
`;


function SvgIcons(props) {
    let myStyle;
    if (props.label === 'timeline') {
        myStyle = TimelineStyle;
    } else if (props.label === 'search') {
        myStyle = SearchStyle;
    } else if (props.label === 'upload') {
        myStyle = UploadStyle;
    } else if (props.label === 'notifications') {
        myStyle = NotificationsStyle;
    } else if (props.label === 'direct-message') {
        myStyle = DirectMessageStyle;
    }

    myStyle = css`
      ${myStyle};
      ${props.style};
    `

    return (
        <div>
	        {(() => {
	          if (props.label === 'timeline') {
	            return <div css={myStyle}><TimelineIcon/></div>
	          } else if (props.label === 'search') {
	            return <div css={myStyle}><SearchIcon/></div>
	          } else if (props.label === 'upload') {
	            return <div css={myStyle}><UploadIcon/></div>
	          } else if (props.label === 'notifications') {
	            return <div css={myStyle}><NotificationsIcon/></div>
	          } else if (props.label === 'direct-message') {
	            return <div css={myStyle}><DirectMessageIcon/></div>
	          }
	        })()}
        </div>
    )


    // return (
    // 	<div css={myStyle}>
    //         <TimelineIcon/>
    //     </div>
    // 	) 
}

SvgIcons.propTypes = {
    label: PropTypes.oneOf(['timeline','search','upload','notifications','direct-message']),
    style: PropTypes.string,
}

SvgIcons.defaultProps = {
    label: 'search'
}


export default SvgIcons;