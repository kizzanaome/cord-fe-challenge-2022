import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

import menu from "../../images/hamburger-menu.svg"

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 }
      ],
      languageOptions: [
        { id: 'GR', name: 'Greek' },
        { id: 'EN', name: 'English' },
        { id: 'RU', name: 'Russian' },
        { id: 'PO', name: 'Polish' }
      ],
      backUpResults: [],
      backUpCount: "0",
      info: "",
      loading: ""
    }

  }
  componentDidMount() {
    this.loadAllGenres();
    this.loadPopularMovies();
  }

  // LISTS POPULAR MOVIES
  // WHEN THE PAGE LOADS AND STORES 
  // THE RESULTS IN THE STATE.
  loadPopularMovies = async () => {
    this.setState({
      loading: true,
    })
    const server_response = await fetcher.getpopularMovies();
    if (server_response.status === 200) {
      this.setState({
        loading: false,
        results: server_response.data.results,
        totalCount: server_response.data.total_results
      })
    } else {
      this.setState({
        info: server_response.details.message
      })
    }
  }

  // LISTS ALL GENRES
  loadAllGenres = async () => {
    const server_response = await fetcher.getAllGenres();
    if (server_response.status === 200) {
      this.setState({
        genreOptions: server_response.data.genres,
      })
    } else {
      this.setState({
        genreOptions: []
      })
    }
  }

  // RETRUNS SEARCHED MOVIES
  searchMovies = async (keyword, year) => {
    this.setState({
      loading: true,
    })
    const server_response = await fetcher.searchAllMovies(keyword, year);
    if (server_response.data.results.length === 0) {
      this.setState({
        loading: false,
        info: "No records found for this search"
      })
    } else {
      this.setState({
        loading: false,
        info: "",
        results: server_response.data.results,
        totalCount: server_response.data.total_results
      })
    }
  }

  // ONCHANGE QUERY TO SEARCH FOR A MOVIE
  onChangeSearch = (value, id) => {
    console.log(value)
    console.log("value serch")
    if (this.state.backUpResults.length === 0) {
      this.setState({
        backUpResults: this.state.results,
        backUpCount: this.state.totalCount
      })
    }
    if (value.length > 0) {
      this.setState({
        keyword: value
      }, () => this.searchMovies(value, this.state.year));
    } else {
      this.setState({
        results: this.state.backUpResults,
        totalCount: this.state.backUpCount
      })
    }

  }

  onSearchDate = (value, id) => {

    if (this.state.backUpResults.length === 0) {
      this.setState({
        backUpResults: this.state.results,
        backUpCount: this.state.totalCount
      })
    }
    if (value.length > 0) {
      if (value.length === 4) {
        this.setState({
          year: value
        }, () => this.searchMovies(this.state.keyword, value));
      }
    } else {
      this.setState({
        results: this.state.backUpResults,
        totalCount: this.state.backUpCount
      })
    }
  }




  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs

  render() {
    const { genreOptions, languageOptions, ratingOptions, totalCount, results } = this.state;

    return (
      <DiscoverWrapper>
        <MobileHeader>
          <HamburgerMenu>
            <img src={menu} alt="menu" />
          </HamburgerMenu>

          <MobilePageTitle>Discover</MobilePageTitle>
        </MobileHeader>

        {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}

        <TotalCount>{totalCount.toLocaleString()} results</TotalCount>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
            onSearch={this.onChangeSearch}
            onSearchDate={this.onSearchDate}
          />
        </MovieFilters>



        <MovieResults>
          <p>{this.state.info}</p>
          {this.state.loading && <p>Loading...</p>}
          <MovieList
            movies={results || []}
            genres={genreOptions || []}
          />
        </MovieResults>
      </DiscoverWrapper>
    )
  }
}

const DiscoverWrapper = styled.main`
  padding: 35px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 0 25px;
  }
`

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 395px);

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`

const MovieFilters = styled.div`
  width: 380px;
  float: right;
  margin-top: 15px;
  margin-right: 35px;
  position: fixed;
  right: 0;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: none;
  }
`

const MobileHeader = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`

const MobilePageTitle = styled.h1`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: block;
    margin-left:30px;
  }
`

const HamburgerMenu = styled.div`
  width:55px;
  cursor:pointer;
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: block;
    border: 1px solid red;
    width:45px;
    cursor:pointer;
  }
`;

const TotalCount = styled.strong`
  display: block;
`

