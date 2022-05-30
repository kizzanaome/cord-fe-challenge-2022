import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";

export default function Paginate({ currentPage, onClickPrevious, onClickNext, metaPages, metaPage }) {
    return (
        <>
            {
                metaPage &&
                <Pagination >
                    <ul>
                        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                            <span
                                className="is-active page-link"
                                // href="#"
                                tabIndex="-1"
                                aria-disabled={currentPage === 1 ? false : true}
                                onClick={onClickPrevious}
                            >
                                <li>Previous</li>
                            </span>
                        </li>

                        <li className={`page-item ${currentPage === metaPages && "disabled"}`}>
                            <span
                                className="page-link"
                                href="#"
                                onClick={onClickNext}
                            >
                                <li>Next</li>
                            </span>
                        </li>
                    </ul>
                </Pagination>

            }
        </>

    );
}

const Pagination = styled.div`

    ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
    }
    
    span{
    display: inline-block;
    padding: 3px 7px;
    cursor:pointer;
    }
    
    li{
    display: inline-block;
    }
    

    span{
        border: 1px solid ${colors.primaryColor};
        border-radius: 5px !important;
        margin: auto 5px;
        color: ${colors.primaryColor};
        font-size: 14px;
        font-weight: bold;
        cursor:pointer;
    }

 

    .is-active{
        background-color: ${colors.primaryColor};
        color: ${colors.whiteBackground};
    }



`









