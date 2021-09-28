import { actor } from '../actors/actors.module';
import { gender } from '../genders/gender.module';

export interface movie {
    id: number,
    title: string,
    image: string,
    duration: string,
    releaseDate: string,
    actors: actor[],
    genders: gender[]
}

export interface movieDetails {
    id: number,
    title: string,
    image: string,
    description: string
    
}

export interface landingPage {
    data?: movie[]
}

export interface formFilter {
    title: '',
    gender:'',
    actor: ''
}
