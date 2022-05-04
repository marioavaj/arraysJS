const movies = new Array();

function input() {
  const movieObject = { movieName: "", movieYear: "", actor1: "", actor2: "" };

  movieObject.movieName = document.getElementById("movieName").value;
  movieObject.movieYear = document.getElementById("moveYear").value;
  movieObject.actor1 = document.getElementById("actor1").value;
  movieObject.actor2 = document.getElementById("actor2").value;

  movies.push(movieObject);
  console.log(movies);
  /*let message = movies[0].movieObject.movieName;
  document.getElementById("listMovie").innerHTML=message;*/
}

function deleteLast() {
  movies.pop();
  console.log(movies)
}

function deleteAll(){
    
    for ( let i = movies.length; i>0; i--){
    movies.pop();
      }
      console.log(movies)
}