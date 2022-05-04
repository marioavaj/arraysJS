const movies = new Array();

function input() {
  const movieObject = { 
    movieName: "", 
    movieYear: "", 
    actor1: "", 
    actor2: "" 
  };

  movieObject.movieName = document.getElementById("movieName").value;
  movieObject.movieYear = document.getElementById("moveYear").value;
  movieObject.actor1 = document.getElementById("actor1").value;
  movieObject.actor2 = document.getElementById("actor2").value;

  movies.push(movieObject);
  console.log(movies);

  showArray(); 
  
}

function deleteLast() {
  movies.pop();
  console.log(movies)

  showArray();

}

function deleteAll(){
    
    for ( let i = movies.length; i>0; i--){
    movies.pop();
      }
      console.log(movies)
      showArray();
          

}

function showArray(){
  console.log("******* Aktuálny zoznam filmov *******");
  
for( let i = 0; i<movies.length; i++ ){
  
  let message = movies[i].movieName +" / " + movies[i].movieYear +" / " + movies[i].actor1 +" / " + movies[i].actor2;
  document.getElementById("listMovie").innerHTML=message;
  console.log((i+1) + ". "+message);
}
}