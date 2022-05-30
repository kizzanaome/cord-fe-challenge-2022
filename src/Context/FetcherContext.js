import React, { Component } from 'react';
import * as fetcher from "../fetcher";



const FetcherContext = React.createContext();


export class FetcherProvider extends Component {

    state = {
        genreOptions: [],
    };


    componentDidMount() {
        this.loadAllGenres();
    }

    
    /**
    * LISTS ALL GENRES
    */
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


    render() {

        return (
            <FetcherContext.Provider value={{
                genreOptions: this.state.genreOptions
            }}>
                {this.props.children}
            </FetcherContext.Provider>
        );
    }

}


export default FetcherContext;
