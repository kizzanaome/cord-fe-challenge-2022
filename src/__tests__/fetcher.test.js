import mockAxios from 'axios';
import * as fetcher from '../fetcher';
import FetcherContext from '../Context/FetcherContext'

jest.mock('axios');


describe('Test All API requests', () => {


    /**
     * TEST THE GET POPULAR MOVIES API ENPOINT
     */
    it("fetches popular movies data successfully from an API", async () => {
        const pageNumber = 1
        const popular_movies = {
            data: {
                results: [{
                    "genre_ids": [28, 12, 14],
                    "id": 338953,
                    "overview": "Professor Albus Dumbledore knows the powerful.",
                    "title": "Fantastic Beasts: The Secrets of Dumbledore",
                    "release_date": "2022-04-06",
                }]
            }
        }
        mockAxios.get.mockImplementationOnce(() => Promise.resolve(
            popular_movies
        ))

        const movies = await fetcher.getpopularMovies(pageNumber);


        expect(movies).toEqual(popular_movies);
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
        expect(mockAxios.get).toHaveBeenCalledWith("https://api.themoviedb.org/3/movie/popular?api_key=dae1bc94f2be7c7a6e80f5ca557ae55f&language=en-US&page=1")
    })


    /**
     * TEST THE GET GENRES API ENPOINT
     */
    it('fetches genres data successfully from an API', async () => {

        const genres = {
            genres: [{
                "id": 28,
                "name": "Action"
            }, {

                "id": 12,
                "name": "Adventure"
            }
            ]
        };

        mockAxios.get.mockImplementationOnce(() => Promise.resolve(genres));

        const genresResults = await fetcher.getAllGenres();

        expect(genresResults).toEqual(genres);
        // expect(genresResults).resolves.toEqual(genres);

        expect(mockAxios.get).toHaveBeenCalledWith("https://api.themoviedb.org/3/genre/movie/list?api_key=dae1bc94f2be7c7a6e80f5ca557ae55f&language=en-US&page");
    });


    /**
     * TEST THE SEARCH API ENPOINT
     */
    it('fetches searched data successfully from an API', async () => {

        const keyword = "Bad";
        const year = "2020";

        const popular_movies = {
            data: {
                results: [{
                    "genre_ids": [28, 12, 14],
                    "id": 338953,
                    "overview": "Professor Albus Dumbledore knows the powerful.",
                    "title": "Fantastic Beasts: The Secrets of Dumbledore",
                    "release_date": "2022-04-06",
                }]
            }
        }
        mockAxios.get.mockImplementationOnce(() => Promise.resolve(popular_movies));
        const searchResults = await fetcher.searchAllMovies(keyword, year);

        expect(searchResults).toEqual(popular_movies);
        // expect(searchResults).resolves.toEqual(popular_movies);

        expect(mockAxios.get).toHaveBeenCalledWith("https://api.themoviedb.org/3/search/movie?api_key=dae1bc94f2be7c7a6e80f5ca557ae55f&language=en-US&query=Bad&page=1&year=2020");
    });


    // it('fetches erroneously data from an API', async () => {
    //     const errorMessage = {
    //         status: 'conn',
    //         details: {
    //             message: 'Oops!!! Failed to reach the server. Please check your internet connection!',
    //             content: false
    //         }
    //     };
    //     mockAxios.get.mockImplementationOnce(() => Promise.reject((errorMessage)),);
    //     // await expect(fetcher.getpopularMovies()).rejects.toThrow("");
    //     const movies = fetcher.getpopularMovies();

    //     // console.log(movies)

    //     expect(movies).rejects.toThrow(errorMessage);


    // });

});
