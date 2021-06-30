// {
//     type:'ADD _MOVIES',
//     movies:[m1,m2,m3]
// }

    // import { ADD_MOVIES } from "../actions";

    // //Action types
    export const ADD_MOVIES = 'ADD_MOVIES';
    export const ADD_FAVOURITES = 'ADD_FAVOURITES'; 
    export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';
    export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'; 


    // //Action Creators    
    export function addMovies(movies) {
        return {
            type: ADD_MOVIES,
            movies
        };
    }

    export function addFavourite(movie) {
        return {
            type: ADD_FAVOURITES,
            movie
        };
    }

    export function removeFavourite(movie) {
        return {
            type: REMOVE_FAVOURITES,
            movie
        };
    }

    export function setShowFavourite(val) {
        return {
            type: SET_SHOW_FAVOURITES,
            val
        };
    }