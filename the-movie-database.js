let movie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"]
}

const printMovie = (movie) => {
    return movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars
}

console.log(printMovie(movie));