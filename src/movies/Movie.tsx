import { movie } from './movies.module';
import css from './css/movie.module.sass';

const Movie = ( props: movieProps ) => {

    const detailsPath = () => `/movies/${ props.movie.id }`;

    return (
        <div className={ css.div }  >
            <a href={ detailsPath() }>
                <img src={ `../assets/posters/${props.movie.image}` } alt=""/>
            </a>

            <p>
                <a href={ detailsPath() }>
                    { props.movie.title}
                </a>
            </p>
        </div>
    )
}


interface movieProps {
    movie: movie
}

export default Movie;