import React from 'react';
import {css} from "@emotion/react";
import UploadPanel from "../molecules/UploadPanel";
import SearchPanel from "../molecules/SearchPanel";

function Header(props) {
    const myStyle = css`
      ${props.style};
      display: flex;
      width: 100%;
      height: 40px;
    `;

    return (
        <div css={myStyle}>
            <SearchPanel/>
            <UploadPanel/>
        </div>
    )
}


export default Header;