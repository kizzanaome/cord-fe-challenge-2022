import React from "react";
import styled from 'styled-components';


export default function NoInternet({ noInternet, message }) {
    return (
        <NoNet>
            <img src={noInternet} alt="no-internet" />
            <p>{message}</p>
        </NoNet>
    )

}

const NoNet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;

  img {
      width: 100px;
  }

  p {
      width: 300px;
      text-align: center;
  }
`
