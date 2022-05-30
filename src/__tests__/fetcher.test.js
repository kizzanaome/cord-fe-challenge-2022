import axios from 'axios';
import * as fetcher from '../fetcher';


const baseUrl = "https://api.themoviedb.org/3"
const apiKey = "dae1bc94f2be7c7a6e80f5ca557ae55f";

jest.mock('axios');

describe('fetchData', () => {

    /**
     * TEST THE GET POPULAR MOVIES API ENPOINT
     */
    it('fetches popular movies data successfully from an API', async () => {
        const endPoint = "/movie/popular"
        const pageNumber = 1;
        const data = { data: { hits: [{ objectID: '1', title: 'a', }, { objectID: '2', title: 'b', },], }, };

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(fetcher.getpopularMovies()).resolves.toEqual(data);

        expect(axios.get).toHaveBeenCalledWith(
            `${baseUrl}` + `${endPoint}` + "?api_key=" + `${apiKey}` + "&language=en-US&page=" + `${pageNumber}`
        );
    });

    /**
     * TEST THE GET GENRES API ENPOINT
     */
    it('fetches genres data successfully from an API', async () => {
        const endPoint = "/genre/movie/list"
        const data = { data: { hits: [{ objectID: '1', title: 'a', }, { objectID: '2', title: 'b', },], }, };

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(fetcher.getAllGenres()).resolves.toEqual(data);

        expect(axios.get).toHaveBeenCalledWith(
            `${baseUrl}` + `${endPoint}` + "?api_key=" + `${apiKey}` + "&language=en-US&page"
        );
    });

    /**
     * TEST THE SEARCH API ENPOINT
     */
    // it('fetches searched data successfully from an API', async (keyword, year) => {
    //     const endPoint = "/search/movie"
    //     const pageNumber = 1;
    //     // const keyword = "Bad";
    //     // const year = "2020";
    //     const data = { data: { hits: [{ objectID: '1', title: 'a', }, { objectID: '2', title: 'b', },], }, };

    //     axios.get.mockImplementationOnce(() => Promise.resolve(data));
    //     await expect(fetcher.searchAllMovies()).resolves.toEqual(data);

    //     expect(axios.get).toHaveBeenCalledWith(
    //         `${baseUrl}` + `${endPoint}` + "?api_key=" + `${apiKey}` + "&language=en-US&query=" + keyword + "&page=" + `${pageNumber}` + year
    //     );
    // });

    // it('fetches erroneously data from an API', async () => {
    //     const errorMessage = { "details": { "content": false, "message": "Oops!!! Failed to reach the server. Please check your internet connection!" }, "status": "conn" };
    //     axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)),);
    //     await expect(fetcher.getpopularMovies()).rejects.toThrow(errorMessage);
    // });
    
});
