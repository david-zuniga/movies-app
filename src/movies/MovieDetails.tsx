import { useParams } from 'react-router';
import axios, { AxiosResponse } from 'axios';
import { movie } from './movies.module';
import { useEffect, useState } from 'react';

const MovieDetails = () => {

    const { id }: any = useParams();

    const defaultMovie: movie = {
        id: 0,
        title: '',
        image: '',
        duration: '',
        releaseDate: '',
        actors: [],
        genders: []
    }
    const [ movie, setMovie ] = useState<movie>(defaultMovie);


    useEffect( () => {
        axios.get(`https://localhost:44368/api/movies/${id}`)
            .then( ( result: AxiosResponse<movie> ) => {
                console.log(result.data);
                setMovie(
                    result.data
                );
            })
   
    }, []) 
    
    return (
        <>
            <h3 className="mt-3">Movie Details</h3>
            <div className="continer row mt-5">
                <div className="col-4">
                    <img 
                        src={`../assets/posters/${ movie.image }`}
                        alt={ movie.title }
                    />
                </div>
                <div className="col-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Title: </b> { movie.title } </li>
                        <p className="list-group-item"><b>Genders: </b> { movie.genders.map((gender) => <span className="badge badge-primary mr-2" key={ gender.id }> {gender.name} </span> ) }</p>
                        <p className="list-group-item"><b>Actors: </b> { movie.actors.map((actor) => <span className="badge badge-primary mr-2" key={ actor.id }> { actor.name } </span> ) }</p>
                        <p className="list-group-item"><b>Duration: </b> { movie.duration } <b> - Release Date: </b> { movie.releaseDate } </p>

                    </ul>

                    <a 
                        className="btn btn-outline-info"
                        href="/"
                        >Return
                    </a>
                </div>
            </div>
        </>
    )
}

export default MovieDetails;