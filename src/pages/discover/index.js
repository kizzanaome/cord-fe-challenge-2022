import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

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
      backUpCount: "0"
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
    const server_response = await fetcher.getpopularMovies();
    this.setState({
      results: server_response.data.results,
      totalCount: server_response.data.total_results
    })
  }

  // LISTS ALL GENRES
  loadAllGenres = async () => {
    const server_response = await fetcher.getAllGenres();
    this.setState({
      genreOptions: server_response.data.genres,
    })
  }

  // RETRUNS SEARCHED MOVIES
  searchMovies = async (keyword, year) => {
    const server_response = await fetcher.searchAllMovies(keyword, year);
    this.setState({
      results: server_response.data.results,
      totalCount: server_response.data.total_results
    })
  }

  // ONCHANGE QUERY TO SEARCH FOR A MOVIE
  onChangeSearch = (value, id) => {
    console.log(value)
    console.log("value serch")
    if (this.state.backUpResults.length == 0) {
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
    console.log(value)
    console.log("value date")

    if (this.state.backUpResults.length == 0) {
      this.setState({
        backUpResults: this.state.results,
        backUpCount: this.state.totalCount
      })
    }
    if (value.length > 0) {
      if (value.length == 4) {
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
        <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
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
`

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 395px);
`

const MovieFilters = styled.div`
  width: 380px;
  float: right;
  margin-top: 15px;
`

const MobilePageTitle = styled.h1`
  display: none;
`

const TotalCount = styled.strong`
  display: block;
`