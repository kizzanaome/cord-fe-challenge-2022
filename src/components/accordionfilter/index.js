import React, { useState } from "react";
import styled from 'styled-components';

export default function ExpandableFilter({ title, genres }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <AccordionItem>
            <AccordionTitle onClick={() => setIsActive(!isActive)}>
                <AccordionIndicator>{isActive ? '-' : '+'}</AccordionIndicator>
                <div>{title}</div>
            </AccordionTitle>

            {isActive &&
                <AccordionContent>
                    <Checkbox className="checkbox">

                        {genres && genres.map((genre) =>
                            <div className="">
                                <input type="checkbox" name="" id="" />
                                <span >{genre.name}</span>
                            </div>
                        )}

                    </Checkbox>
                </AccordionContent>
            }
        </AccordionItem>
    )
}


const AccordionItem = styled.div``;

const AccordionTitle = styled.div`
    display: flex;
    margin: 0 !important;
    padding-left: 0 !important;
    font-size: 20px;
    font-weight: medium;
    align-items: center;
    cursor: pointer;
    padding: 0.3rem;
    transition: .3s;

    /* --- smartphone responsiveness --- */
    @media only screen and (min-width: 270px) and (max-width: 1439px) {
        margin: 0 0 15px 0;
        font-size: 17px;
        font-weight: medium;
    }
`;

const AccordionIndicator = styled.div`
    font-size: 27px !important;
    margin: 0 10px 0 0;

    /* --- smartphone responsiveness --- */
    @media only screen and (min-width: 270px) and (max-width: 1439px) {
        font-size: 20px;
    }
`;

const AccordionContent = styled.div`
    padding-top: 1rem;
    transition: .3s;
    height: 37vh;
    overflow-y: scroll;
`;

const Checkbox = styled.div`
    display: flex;
    flex-direction: column;

    div {
        margin: 0 0 15px 0;
        display: flex;
        align-items: center;

        input[type="checkbox"] {
        margin: 0 15px 0 0;
        width: 19px;
        height: 19px;
        }

        span {
        font-size: 18px;
        font-weight: 100;
        }
    }

    /* --- smartphone responsiveness --- */
    @media only screen and (min-width: 270px) and (max-width: 1439px) {
        margin: 0 0 15px 0;
        font-size: 17px;
        font-weight: medium;
    }
`;
