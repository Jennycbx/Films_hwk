import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film title={film.title} key={film.id}></Film>
    })

    return (
        <>
        {filmNodes}
        </>
    )
}