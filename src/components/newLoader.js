import React from "react";
import styled from 'styled-components';

import * as colors from "../colors";


export default function Loading() {
    return (
        <Load>
            Loading data....
            {/* <span className="skeleton-loader-background"> </span> */}
        </Load>
    )

}

const Load = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    font-weight:400;
    font-size:15px;
    margin-top:3px;

    .skeleton-loader-background {
        width: 25%;
        height: 5px;
        border-radius: 5px;
        display: block;
        margin-bottom:1px;
        background: ${colors.primaryColor};

        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.5) 70%,
            rgba(255, 255, 255, 0) 100%
        ),
        ${colors.primaryColor};
        background-repeat: repeat-y;
        background-size: 50px 200px;
        background-position: 0 0;
        animation: shine 1.3s infinite;
    }

    @keyframes shine {
        to {
            background-position: 100% 0, /* move highlight to right */ 0 0;
        }
    }
`