let movies = [
    {
        id: 0,
        name: "dune",
        score: 8
    },
    {
        id: 1,
        name: "lalaland",
        score: 10
    },
    {
        id: 2,
        name: "parasite",
        score: 9
    }
]


export const getMovies = () => movies;

export const getById = id => {
    const filteredMoies = movies.filter(movie => movie.id === id)
    return filteredMoies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie
}
