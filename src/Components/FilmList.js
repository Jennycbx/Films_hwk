import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film title={film.title} url={film.url} key={film.id}></Film>
    })

    return (
        <div id="films">
        {filmNodes}
        </div>
    )
}

export default FilmList;