const express = require("express");
const app = express();

app.use(express.json());

const movies = [
  {
    id: 1,
    title: "Shrek",
    rating: 11,
    image:
      "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR88,0,630,1200_AL_.jpg",
  },
  {
    id: 2,
    title: "2 Fast 2 Furious",
    rating: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
];

app.get("/api/movies", (req, res) => {
  res.status(200).send(movies);
});

app.get("/api/movie/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === +req.params.id);

  res.status(200).send(movie);
});

app.listen(4040, () => {
  console.log("Server running");
});
