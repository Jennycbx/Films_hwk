import Film from './Film';

const FilmList = ({films}) => {

    const filmList = films.map((film) => {
        return (
        <Film title={film.title} url={film.url} key={film.id}></Film>
        )
    })

    return (
        <div id="films">
        {filmList}
        </div>
    )
}

export default FilmList;