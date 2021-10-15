/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import axios from "axios";
import React from "react";

export default function LikedMovieList() {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        const URL = "http://ec2-3-23-92-210.us-east-2.compute.amazonaws.com:5000/movie-histories/user/3";
        axios.get(URL).then((response) => {
            setMovies(response.data.splice(0,6));
        });
    }, []);

    if (!movies[0]) return "No liked movies";

    return (
        <>
            <ul> 
                {movies.map((movie) => 
                    <li>{movie.movieTitle}</li>
                )}
            </ul>
        </>
    );
}
