import ActorList from './actors/ActorList';
import EditActor from './actors/EditActor';
import CreateActor from './actors/CreateActor';
import CreateMovie from './movies/CreateMovie';
import MovieDetails from './movies/MovieDetails';
import FilterMovie from './movies/SearchMovie';
import RedirectHome from './utilities/RedirectHome';


const routes = [

    { path: '/movies/create', component: CreateMovie },
    { path: '/movies/:id(\\d+)', component: MovieDetails },

    { path: '/actors/create', component: CreateActor },
    { path: '/actors/edit/:id(\\d+)', component: EditActor },
    { path: '/actors', component: ActorList, exact: true },

    { path: '/', component: FilterMovie, exact: true },
    { path: '*', component: RedirectHome }

];

export default routes;