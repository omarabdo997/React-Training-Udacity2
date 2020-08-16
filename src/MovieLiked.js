import React, {Component} from 'react';

class MovieLiked extends Component {
	render() {
      let moviesLiked={};
      let moviesNotLiked=[];
      let profiles = this.props.profiles;
      let movies = this.props.movies;
      let users=this.props.users;
      profiles.forEach((profile) => {
        let arr = moviesLiked[movies[profile.favoriteMovieID].name] || [];
        arr.push(users[profile.userID]);
        moviesLiked[movies[profile.favoriteMovieID].name] = arr;
      })
      for ( let key in movies) {
        if (!(movies[key].name in moviesLiked)){
          moviesNotLiked.push(movies[key].name);
        }
      }
      console.log('moviesLiked',moviesLiked);
      console.log('movies not liked', moviesNotLiked);
      return (
        <ol>
        	{Object.keys(moviesLiked).map((movie) => (
        	<li key={movie}>
          		<h2>{movie}</h2>
        		<p>Liked by</p>
        		<ul>
        			{moviesLiked[movie].map((liker)=> <li key={liker.id}>{liker.name}</li>)}
        		</ul>
			</li>
        	))}
			{moviesNotLiked.map((movie) => (
        	<li key={movie}>
          		<h2>{movie}</h2>
        		<p>None of the current users liked this movie</p>
        		
			</li>
        	))}
  		</ol>
      )
      
    }
}
export default MovieLiked;