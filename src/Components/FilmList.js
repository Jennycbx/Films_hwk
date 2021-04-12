import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film title={film.title} src={film.url} key={film.id}></Film>
    })

    return (
        <>
        {filmNodes}
        </>
    )
}

export default FilmList;