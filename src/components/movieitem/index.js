import React, { useState } from "react";
import styled, { css } from 'styled-components';

import * as color from "../../colors";
import placeholder from "../../images/placeholder_leg.png"

export default function MovieItem({ movie, genres }) {

  const imageUrl = "https://image.tmdb.org/t/p/w200/";

  const [readMore, setReadMore] = useState(false);

  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <img
          src={movie.poster_path ? imageUrl + movie.poster_path : placeholder}
          alt="poster"
        />
      </LeftCont>
      <RightCont>

        <Header>
          <Title>{movie.title}</Title>
          <Rating>{movie.vote_average}</Rating>
        </Header>
        <Genre>
          <div
            className={`${movie.genre_ids.length > 3 ? 'scrollEnable' : movie.genre_ids.length > 5 ? 'scrollerEnable' : ''
              }`}
          >
            {genres.map(genre =>
              movie.genre_ids.map((genre_id, key) =>
                <>
                  {genre.id === genre_id &&
                    <>
                      {key !== (movie.genre_ids.length - 1)
                        ?
                        <>
                          <p key={genre_id}> {genre.name}  |  </p>
                        </>
                        :
                        <>
                          <p key={genre_id}> {genre.name}  </p>
                        </>
                      }
                    </>
                  }
                </>
              )
            )}
          </div>
        </Genre>
        <Description>
          {movie.overview.length > 370
            ?
            <>
              {!readMore
                ?
                (
                  <span >{movie.overview.substring(0, 370)}
                    <span className="readmore" onClick={() => setReadMore(true)} >
                      ... ReadMore
                    </span>
                  </span>
                )
                :
                <span>{movie.overview}
                  <span className="readmore" onClick={() => setReadMore(false)}>
                    ReadLess
                  </span>
                </span>
              }
            </>
            :
            <span>{movie.overview}</span >
          }

        </Description>
        <MobileDescription>
          {movie.overview.length > 75
            ?
            <>
              {!readMore
                ?
                (
                  <span>
                    {movie.overview.substring(0, 75)}
                    <span className="readmore" onClick={() => setReadMore(true)} >
                      ... ReadMore
                    </span>
                  </span>
                )
                :
                <span>{movie.overview}
                  <span className="readmore" onClick={() => setReadMore(false)}>
                    ReadLess
                  </span >
                </span>
              }
            </>
            :
            <span>{movie.overview}</span >
          }
        </MobileDescription>
        <Date>{movie.release_date}</Date>
      </RightCont>
    </MovieItemWrapper>
  )
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;
`;

const LeftCont = styled.div`
  display: inline-block;
  margin-right: 20px;

  // /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    img{
      width:100px;
    }
  }

  // /* --- tablet responsiveness --- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1439px) {
    img{
      width:120px;
    }
  }
`;

const RightCont = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.4;
  margin: 0;

  // /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    font-size: 18px;
    font-weight: 900;
    color:black;
  }

  // /* --- tablet responsiveness --- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1439px) {
    font-size: 20px;
    font-weight: 900;
    color:black;
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 25px;
  color: #fff;
  padding: 3px;
  font-size: 19px;
  font-weight: bold;
  border-radius: 3px;
  background-color: ${color.primaryColor};

  // /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    width: 30px;
    height: 18px;
    font-size: 15px;
  }

  // /* --- tablet responsiveness --- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1439px) {
    width: 33px;
    height: 21px;
    font-size: 17px;
  }
`;

const Genre = styled.div`

  div {
    display: flex;
    margin: 0;
    padding: 0;

    p {
      margin: 5px 7px 0 0;
      color: ${color.primaryColor};
      font-weight: bold;
    }
  }

  // /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    width: 150px;
    overflow-x: scroll;
    font-size: 9px;

    .scrollEnable {
      width: 70vw;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    .scrollerEnable {
      width: 80vw;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    .scrollEnable::-webkit-scrollbar,
    .scrollerEnable::-webkit-scrollbar {
      display: none !important;
    }
  }

  // /* --- tablet responsiveness --- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1439px) {
    width: 200px;
    overflow-x: scroll;
    font-size: 12px;

    .scrollEnable {
      width: 80vw;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    .scrollerEnable {
      width: 90vw;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    .scrollEnable::-webkit-scrollbar,
    .scrollerEnable::-webkit-scrollbar {
      display: none !important;
    }
  }
`;

const MobileDescription = styled.p`
  display : none;

  // /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    display:block;
    font-size: 12px;
    color:${color.fontColor};
  }

  .readmore{
    font-size: 11px;
    color:#0000EE;
    cursor:pointer;
    margin-left:3px;
  }
`

const Description = styled.p`
  margin: 17px 0 0 0;
  padding: 0;

  .readmore{
    color:#0000EE;
    cursor:pointer;
    margin-left:3px;
  }

  // /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    display: none;
    font-size: 12px;
    color:${color.fontColor};
  }

  // /* --- tablet responsiveness --- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1439px) {
    display:block;
    font-size: 13px;
    color:${color.fontColor};
  }
`;

const Date = styled.p`
  position: absolute;
  bottom: 0px;
  margin: 0px;
  color: ${color.primaryColor};

  // /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    font-size: 11px;
  }

  // /* --- tablet responsiveness --- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1439px) {
    font-size: 12px;
  }
`;

