const movies = new Array(); //Pole fimov

/**Vytvorenie objektu film s udajmi o filme */
const movieObject = {
  movieName: "",
  movieYear: "",
  actor1: "",
  actor2: "",
};

let onScreenAdd; //premenna, v ktorej sa neskor ulozi text pre vypis filmov na obrazovku

/**Funkcia zapise do objektu udaje filmu nacitene z formulara pos stlaceni tlacidla VLOZIT */
function input() {
  movieObject.movieName = document.getElementById("movieName").value;
  movieObject.movieYear = document.getElementById("moveYear").value;
  movieObject.actor1 = document.getElementById("actor1").value;
  movieObject.actor2 = document.getElementById("actor2").value;

  movies.push(movieObject); //vlozi udaje o filme do pola movies[]
  console.log(movies);

  showArray(); //vypise na konzolu z pola movies[] vsetky ulozene filmy
  addToScreenList(); //vypise na obrazovku udaje posledneho filmu
}

/**Funkcia zmaze udaje posleneho filmu z pola movies[] nacitene z formulara po stlaceni tlacidla ODSTRANIT POSLEDNY */
function deleteLast() {
  movies.pop();
  console.log(movies);
  showArray(); //vypise na konzolu z pola movies[] vsetky ulozene filmy
}
/**Funkcia zmaze vsetky udaje z pola movies[]  po stlaceni tlacidla VYMAZAT ZOZNAM */
function deleteAll() {
  for (let i = movies.length; i > 0; i--) {
    movies.pop();
  }
  console.log(movies);
  showArray(); //vypise na konzolu z pola vsetky ulozene filmy
}

/**Vypis vsetkych ulozenych prvkov(filmov) >>>na konzolu<<< v poli movies[] */
function showArray() {
  console.log("******* Aktuálny zoznam filmov *******");
  for (let i = 0; i < movies.length; i++) {
    message =
      movies[i].movieName +
      " / " +
      movies[i].movieYear +
      " / " +
      movies[i].actor1 +
      " / " +
      movies[i].actor2;

    console.log((i + 1) + ". " + message);
  }

  /** premenna na vypocet indexu posledneho prvku v poli */
  let lastItemIndex = movies.length - 1;
//Podmienka kvoli chybe, ktoru sposobuje movies.length - 1 (posledny nulty index by sa rovnal -1!!!!!!! co nasledne vypise chybu v konzole prehliadaca )
  if (movies.length - 1 < 0) {
        lastItemIndex = 0; 
  } else
  /**Premenna onScreenAdd vytvori retazec s udajmi o poslednom prvku(filme) */
    onScreenAdd =
      movies[lastItemIndex].movieName +
      " / " +
      movies[lastItemIndex].movieYear +
      " / " +
      movies[lastItemIndex].actor1 +
      " / " +
      movies[lastItemIndex].actor2;
}
/**Funkcia vytvori DOM objekt "li" + prida don text s poslednym pridanym filmom*/
function addToScreenList() {
  var movieList = document.getElementById("movieList");
  var movieItem = document.createElement("li");
  movieItem.textContent = onScreenAdd;
  movieList.appendChild(movieItem);
}
