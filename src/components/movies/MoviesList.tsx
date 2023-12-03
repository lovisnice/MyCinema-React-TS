import { useState } from "react";
import MovieCard from "./MovieCard";
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { IMovie, IMovieSearch } from "../../models/movie";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { initialState } from "../../reducer/searchSlice";
import { useAppSelector } from "../../reducer/hooks";
////9ab7a18b

// const api: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=9ab7a18b';
// const api: string ='https://www.omdbapi.com/?s=car&apikey=9ab7a18b';
// const api: string = 'https://cinema-api-pv114.azurewebsites.net/api/movies';

const api: string = 'https://cinema-api-1.azurewebsites.net/api/movies';
//const searchapi: string = 'https://www.omdbapi.com/?s=car&apikey=50bcb9c1';


  
const MoviesList = () => {
    const [movies, setMovies] = useState<IMovieSearch[] | undefined>();
    const [moviesSearch, setMoviesSearch] = useState<IMovieSearch[] | undefined>();
    //const searchapi: string = `https://www.omdbapi.com/?s=${keyword}&apikey=50bcb9c1`;
    //let keyword = useSelector((state:typeof initialState) => state.keyword);
    //console.log(keyword);
    let placeholder = [];

    for (let i = 0; i < 4; i++) {
        placeholder.push(
            <Grid key={i} item xs={12} sm={6} md={3} >
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="rectangular" height={350} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton  width="90%" height={40} />
                    <Skeleton  width="45%" height={40} />
                    <Skeleton  width="60%" height={40} />
               </Stack>
            </Grid>
        );
    }


    // useEffect(() => {
    //     fetch(api).then(res => res.json()).then(data => {
    //         setMovies(data);
    //         console.log(movies);
    //     }).catch(err => console.error(err));
    //  }, []);

    const keyword = useAppSelector((state) => state.search.keyword);
    useEffect(() => {
        const searchapi = `https://www.omdbapi.com/?s=${keyword}&apikey=50bcb9c1`;
        fetch(searchapi).then(res => res.json()).then(data => {
            setMoviesSearch(data["Search"]);
            console.log(keyword);
        }).catch(err => console.error(err));
  }, [keyword]);

    return (
        <>
            <h2>Movies List</h2>
            <Grid container spacing={4}>
                {moviesSearch? (
                    moviesSearch.map((movie,i) =>
                    <Grid key={i} item xs={12} sm={6} md={3} >
                        <MovieCard {...movie} />
                    </Grid>))
                    :
                    (placeholder)
                }

               

            </Grid>
          
        </>
    );
}

export default MoviesList;



