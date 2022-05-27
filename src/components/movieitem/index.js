import React from "react";
import styled from 'styled-components';

import * as color from "../../colors";

export default function MovieItem({ movie, genres }) {
  const imageUrl = "https://image.tmdb.org/t/p/w200/";

  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <img src={imageUrl + movie.poster_path} alt="poster" />
      </LeftCont>
      <RightCont>

        <Header>
          <Title>{movie.title}</Title>
          <Rating>{movie.vote_average}</Rating>
        </Header>
        <Genre>
          {genres.map(genre =>
            movie.genre_ids.map((genre_id, key) =>
              <>
                {genre.id == genre_id &&
                  <>
                    {key !== (movie.genre_ids.length - 1)
                      ?
                      <>
                        <p key={key}> {genre.name}  |  </p>
                      </>
                      :
                      <>
                        <p > {genre.name}  </p>
                      </>
                    }
                  </>
                }
              </>

            )
          )}
        </Genre>
        <Description>{movie.overview}</Description>
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
`;

const RightCont = styled.div`
  display: inline-block;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.4;
  margin: 0;
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
  background-color: ${color.primaryColor}
`;

const Genre = styled.div`
  display: flex;
  margin: 0;
  padding: 0;

  p {
      margin: 5px 7px 0 0;
      color: ${color.primaryColor};
      font-weight: bold;
  }
`;

const Description = styled.p`
  font-size: 17px;
`;

const Date = styled.p`
  position: absolute;
  bottom: 0px;
  margin: 0px;
  color: ${color.primaryColor}
`;

