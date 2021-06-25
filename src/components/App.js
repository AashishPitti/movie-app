import React from "react";
// import { data } from '../data';
import Navbar from  './Navbar';
import MovieCard from "./MovieCard";
import { data } from "../data";

class App extends React.Component{
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log("UPDATED");
      this.forceUpdate();
    });
    // make api call
    // dispatch action
    store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    });
    console.log('State',this.props.store.getState());
  }

  render(){
    const {list} = this.props.store.getState();
    console.log("render",this.props.store.getState())
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Fovourites</div>
        </div>

        <div className="list">
          {list.map((movie,index)=>(
            <MovieCard movie = {movie} key={`movies-${index}`}/>
          ))}
        </div>
      </div>
    </div>
  );

  }
}


export default App;
