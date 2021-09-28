import { useEffect, useState } from "react";
import MovieForm from "./MovieForm";
import {  movie, formFilter } from './movies.module';
import MovieList from './MovieList';
import axios, { AxiosResponse } from "axios";

const SearchMovie = () => {

    const formValues: formFilter = {
        title: '',
        gender:'',
        actor: ''
    }

    

    const [ movies, setMovies ] = useState<movie[]>([]);

    const handleSearch = ( values: formFilter ) => {
        console.log('On handleSearch');

        axios.get('https://localhost:44368/api/movies/filter', { params: values} )
            .then( ( result: AxiosResponse<movie[]> ) => {
                setMovies(
                    result.data
                );
            })
    }


    useEffect( () => {
        axios.get('https://localhost:44368/api/movies')
            .then( ( result: AxiosResponse<movie[]> ) => {
                setMovies(
                    result.data
                );
            })


    }, [])    

    return (
        <div className="mt-2 mb-2">
            <h4>Find your favorite movie</h4>
            <hr />

            <MovieForm handleSearch={ handleSearch } />
            <MovieList movies={ movies } />
           
        </div>
    )
}

export default SearchMovie;