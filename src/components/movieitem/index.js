import React from "react";
import styled, { css } from 'styled-components';

import * as color from "../../colors";
import placeholder from "../../images/placeholder_leg.png"

export default function MovieItem({ movie, genres }) {

  const imageUrl = "https://image.tmdb.org/t/p/w200/";

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
            className={`${ 
              movie.genre_ids.length > 3 ? 'scrollEnable' : movie.genre_ids.length > 5 ? 'scrollerEnable' : '' 
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
          {movie.overview.length > 500
            ?
            `${movie.overview.substring(0, 500)}...`
            :
            movie.overview
          }
        </Description>
        <MobileDescription>
          {movie.overview.length > 75
            ?
            `${movie.overview.substring(0, 75)}...`
            :
            movie.overview
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

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    img{
      width:100px;
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

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 18px;
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

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 30px;
    height: 18px;
    font-size: 15px;
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

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
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
`;

const MobileDescription = styled.p`
  display : none;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display:block;
      font-size: 12px;
      color:black;
    }
`

const Description = styled.p`
  margin: 17px 0 0 0;
  padding: 0;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: none;
    font-size: 12px;
    color:black;
  }
`;

const Date = styled.p`
  position: absolute;
  bottom: 0px;
  margin: 0px;
  color: ${color.primaryColor};

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 11px;
  }
`;

