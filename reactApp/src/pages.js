import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';




export const PublicPage = () => {
    return  <> <h2>Public page</h2>
    <h1>Movies API</h1>
<div>
  <p class="title">CEO  Founder, Example</p>
  <p>Harvard University</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
  </div>
  </>
 }
 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies.results.map(movie => { return <>{movie.id},{movie.title},{movie.backdrop_path}<br /></> })}
        </div>
    </>
}
 export const Profile = () => {
    return <>
    <h2>My Profile </h2>
<h1>John Doe</h1>
<div>
  <p class="title">CEO  Founder, Example</p>
  <p>Harvard University</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
  </div>
  </>
}
//  export const HomePage = () => {
//      return  <h2>Home page</h2>
//  }
 