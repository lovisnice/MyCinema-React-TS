import { useState } from "react";
import MovieCard from "./MovieCard";
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { IMovie } from "./movie";
//9ab7a18b

// const api: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=9ab7a18b';
const api: string ='https://www.omdbapi.com/?s=car&apikey=9ab7a18b';

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[] | undefined>();

    useEffect(() => {
        fetch(api).then(res=>res.json()).then(data=>{
            console.log(data);
            console.log(data.Search);
            setMovies(data.Search);
        })
    },[])
    return (
        <>
            <h2>Movies List</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} >
                    <MovieCard  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <MovieCard />
                </Grid>

            </Grid>

        </>
    );
}

export default MoviesList;