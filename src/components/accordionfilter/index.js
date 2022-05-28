import React, { useState } from "react";
import styled from 'styled-components';

export default function AccordionFilter({ title, genres }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div className="accordion-indicator">{isActive ? '--' : '+'}</div>
                <div>{title}</div>
            </div>

            {isActive &&
                <div className="accordion-content">
                    <div className="checkbox">

                        {genres && genres.map(( genre) =>
                            <div className="">
                                <input type="checkbox" name="" id="" />
                                <span >{genre.name}</span>
                            </div>
                        )}

                    </div>
                </div>

            }

        </div>
    )
}


