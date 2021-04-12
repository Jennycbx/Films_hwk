import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film url={film.url} key={film.id}>{film.title}</Film>
    })

    return (
        <>
        {filmNodes}
        </>
    )
}