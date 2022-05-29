import axios from 'axios';

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

const baseUrl = "https://api.themoviedb.org/3"
const apiKey = "dae1bc94f2be7c7a6e80f5ca557ae55f";


// AXIOS REQUEST TO FETCH ALL POPULAR 
// MOVIES FROM THE MOVIESDB API
export const getpopularMovies = async () => {

    const endPoint = "/movie/popular"
    const pageNumber = 1;

    try {
        let response = await axios.get(
            baseUrl + endPoint + "?api_key=" +
            apiKey + "&language=en-US&page=" +
            pageNumber
        )

        return response
    } catch (error) {
        console.log(error)
        let connError = {
            'status': 'conn',
            'details': {
                'message': 'Oops!!! Failed to reach the server. Please check your internet connection!',
                'content': false
            }
        }
        return connError;
    }

}

// API REQUEST TO FETCH ALL GENRES
// FROM THE MOVIESDB API
export const getAllGenres = async () => {

    const endPoint = "/genre/movie/list"

    try {
        const response = await axios.get(
            baseUrl + endPoint +
            "?api_key=" + apiKey +
            "&language=en-US&page"
        );
        console.log(response)
        return response;
    } catch (error) {
        let connError = {
            'status': 'conn',
            'details': {
                'message': 'Contacting server....',
                'content': false
            }
        }
        return connError;
    }
}

// API REQUEST TO SEARCH
// FROM THE MOVIESDB API
export const searchAllMovies = async (keyword, year) => {

    console.log(keyword)
    console.log(year)

    const endPoint = "/search/movie"
    const pageNumber = 1;

    try {
        const response = await axios.get(baseUrl + endPoint + "?api_key=" + apiKey + "&language=en-US&query=" + keyword + "& page=" + pageNumber + "&year=" + year);
        return response;

    } catch (error) {
        let connError = { 'status': 'conn', 'details': { 'message': 'Contacting server....', 'content': false } }
        return connError;
    }
}
