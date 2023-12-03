import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IMovie } from '../../models/movie';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

const api: string = 'https://cinema-api-1.azurewebsites.net/api/movies';

export default function AddMovie() {
  const [movies, setMovies] = useState<IMovie[] | undefined>();
  const [title, setTitle] = useState("Title");
  const [year, setYear] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("Description");


  const submit=()=>
{
  let movie : IMovie = {
    title : title,
    year : year,
    imageUrl : imageUrl,
    description : description,
    poster : ""
  }
  console.log(movie);


   fetch(api+'/create', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      body: JSON.stringify(movie),
    }).catch(err => console.error(err));
   
}

  useEffect(() => {
    fetch(api).then(res => res.json()).then(data => {
        setMovies(data);
        console.log(movies);
    }).catch(err => console.error(err));
}, []);


  return (
    <form>
    <Box
      component="form"
      noValidate
      sx={{
        marginY: '10px',
        display: 'grid',
        gridTemplateColumns: { sm: '1fr' },
        gap: 2,
        alignItems: 'center', // Center items vertically
        justifyItems: 'center', // Center items horizontally
        textAlign: 'center', // Center text within items
      }}
    >
      <CssTextField label="Title" id="title" onChange={(event) => setTitle(event.target.value)} />
      <CssTextField label="Year" id="year" onChange={(event) => setYear(parseInt(event.target.value))} />
      <CssTextField label="ImageUrl" id="imageUrl" onChange={(event) => setImageUrl(event.target.value)}/>
      <CssTextField label="Description" id="description" onChange={(event) => setDescription(event.target.value)} />
    </Box>
    <Button variant="contained" onClick={submit}>Add</Button>
    
    </form>
  );
}
