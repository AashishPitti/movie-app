const inirialMoviesState ={
    list:[],
    fovourites:[]
}

export default function movies(state=inirialMoviesState,action){
    if (action.type =="ADD_MOVIES"){
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}