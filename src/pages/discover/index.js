import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

import SearchIcon from "../../images/search-icon-yellow.png";

import filter from "../../images/filter-icon.png";

import SearchBar from "../../components/searchbar";

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
      loading: "",
      noKeyword: false

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
    if (this.state.backUpResults.length === 0) {
      this.setState({
        backUpResults: this.state.results,
        backUpCount: this.state.totalCount
      })
    }
    if (value.length > 0) {
      this.setState({
        noKeyword: false,
        keyword: value
      }, () => this.searchMovies(value, this.state.year));
    } else {

      this.setState({
        results: this.state.backUpResults,
        totalCount: this.state.backUpCount,
        keyword: ""
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
    if (this.state.keyword) {
      this.setState({
        noKeyword: false
      })

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

    } else {
      this.setState({
        noKeyword: true,
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
          <MobilePageTitle>Discover</MobilePageTitle>
        </MobileHeader>

        <MobileSearchSection>
          <SearchBar
            id="keyword_search_input"
            type="text"
            icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
            placeholder="Search for movies"
            onChange={this.onChangeSearch}
          />

          <div className="filterIcon">
            <img src={filter} alt="menu" />
          </div>
        </MobileSearchSection>

        {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}

        <TotalCount>{totalCount.toLocaleString()} movies</TotalCount>
        <MovieFilters>
          {this.state.noKeyword && <FormError>Search for movies is required</FormError>}
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
            onSearch={this.onChangeSearch}
            onSearchDate={this.onSearchDate}
            keyword={this.state.keyword ? true : false}
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

  /* --- smartphone and tablet responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 1439px) {
    padding: 0 25px;
  }
`

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 395px);

  /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    width: 100%;
  }

  /* --- tablet responsiveness --- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1439px) {
    width: calc(100% - 295px);
  }
`

const MovieFilters = styled.div`
  width: 380px;
  float: right;
  margin-top: 15px;
  margin-right: 35px;
  position: fixed;
  right: 0;

  /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    display: none;
  }

  /* --- tablet responsiveness --- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1439px) {
    width: 280px;
  }
`

const MobileHeader = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;


const MobilePageTitle = styled.h1`
  display: none;

  /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 1439px) {
    display: block;
    margin-left:60px;
    font-size: 30px;
    font-weight: 400;
  }
`;

const MobileSearchSection = styled.div`
  display: none;

  /* --- smartphone responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 767px) {
    display: flex;
    margin: 7px 0 45px 0;
    justify-content: space-between;
    align-items: bottom;

    .filterIcon {
      border-bottom: 2px solid ${colors.primaryColor};

      img{
        margin-bottom:-24px !important;
        padding-bottom:0 !important;
        width: 27px;
      }
    }
  }
`;

const TotalCount = styled.strong`
  display: block;
  font-weight:100;
  font-size:13.5px;
  
`;

const FormError = styled.span`
  color: #FF0000;

`

