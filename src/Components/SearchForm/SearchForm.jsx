import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useFilmContext } from '../../Context/FilmContext';
import Item from '../Item/Item';

const SearchForm = () => {
    const films = useFilmContext();

    const uniqueGenres = {};
    films.forEach((movie) => {
        if (movie.genres) {
            movie.genres.forEach((genre) => {
                uniqueGenres[genre.name] = true;
            });
        }
    });

    const categories = Object.keys(uniqueGenres);
    const [name, setName] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        const filteredMovies = films.filter(movie => {
            const matchesTitle = name ? movie.name.toLowerCase().includes(name.toLowerCase()) : true;
            const matchesCategories = selectedCategories.length
                ? selectedCategories.every(category => movie.genres.some(genre => genre.name === category))
                : true;

            return matchesTitle && matchesCategories;
        });
        setResults(filteredMovies);
    };

    const handleCategoryChange = (event) => {
        const category = event.target.name;
        setSelectedCategories(prev =>
            event.target.checked
                ? [...prev, category]
                : prev.filter(cat => cat !== category)
        );
    };

    return (
        <div className="searchForm">
            <div className="search">
                <TextField
                    label="Введите название"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <FormGroup row>
                    {categories.map((category) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedCategories.includes(category)}
                                    onChange={handleCategoryChange}
                                    name={category}
                                />
                            }
                            label={category}
                            key={category}
                        />
                    ))}
                </FormGroup>
                <Button variant="contained" onClick={handleSearch}>Search</Button>

            </div>
            <div className="contentSearch">
                {results.map(item => (
                    <Item
                        film={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchForm;