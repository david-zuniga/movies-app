import Movie from './Movie';
import { movie } from './movies.module';
import css from './css/movie-list.module.sass';
import Loading from '../utilities/Loading';

const MovieList = ( props: movieListProps ) => {

    if ( !props.movies ) {
        return <div className={css.loading}><Loading /></div>
    } else if ( props.movies.length === 0 ){
        return <>There are no movies to show</>
    } else {
        return (
            <div className={css.div}>
                { props.movies.map( movie => 
                    <Movie 
                        movie={ movie }
                        key={ movie.id }
                    /> 
                )}
            </div>
        )
    }
}

interface movieListProps {
    movies?: movie[]
}

export default MovieList;