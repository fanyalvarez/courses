//27) Programa una clase llamada Pelicula.
/*
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  -1 Todos los datos del objeto son obligatorios.
  -2 Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  -3 Valida que el título no rebase los 100 caracteres.
  -4 Valida que el director no rebase los 50 caracteres.
  -5 Valida que el año de estreno sea un número entero de 4 dígitos.
  -6 Valida que el país o paises sea introducidos en forma de arreglo.
  -7 Valida que los géneros sean introducidos en forma de arreglo.
  -8 Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  -9 Crea un método estático que devuelva los géneros aceptados*.
  -10 Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  -11 Crea un método que devuelva toda la ficha técnica de la película.
  -12 Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

// export const movie = (id, titulo, director, anio, pais, genero, calificaion) => {
export const movie = (data) => {
  const infoMovie = {
    id: data.id,
    titulo: data.titulo,
    director: data.director,
    anio: data.anio,
    pais: data.pais,
    genero: data.genero,
    calificaion: data.calificaion
  }
  console.log(infoMovie)


  //---1 Todos los datos del objeto son obligatorios.
  const valDatos = () => {
    if (Object.values(infoMovie).includes('')) console.log('Los datos tienen que ser llenados')
  }
  valDatos(infoMovie)

  //---2 Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  const valId = (id) => {
    let contador = 0
    const element = id.split('');

    for (let index = 0; index < 2; index++) {
      if (isNaN(element[index])) contador++
    }
    for (let index = 2; index < id.split('').length; index++) {
      if (!isNaN(element[index])) contador++
    }
    return console.log('La validacion del id es ', contador === 9)
  }
  // valId(infoMovie.id)

  //---3 Valida que el título no rebase los 100 caracteres.
  const valTitle = (titulo) => {
    // const validacion = titulo.length < 100
    console.log('La validacion los caracteres de titulo es', titulo.length < 100)
  }
  // valTitle(infoMovie.titulo)

  // -4 Valida que el director no rebase los 50 caracteres.
  const valDirect = (director) => {
    console.log('La validacion los caracteres de director es', director.length < 50)

  }
  // valDirect(infoMovie.director)
  
  // -5 Valida que el año de estreno sea un número entero de 4 dígitos.
  // -6 Valida que el país o paises sea introducidos en forma de arreglo.
  // -7 Valida que los géneros sean introducidos en forma de arreglo.
  // -8 Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  // -9 Crea un método estático que devuelva los géneros aceptados*.
  // -10 Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  // -11 Crea un método que devuelva toda la ficha técnica de la película.
  // -12 Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.














}
movie(
  {
    id: 'ab1234567',
    titulo: 'coraline',
    director: 'Henry Selick',
    anio: 2009,
    pais: ['United States', 'Japan'],
    genero: ['Animation', 'Drama', 'Family', 'Fantasy'],
    calificaion: 7.7,
  }
)



