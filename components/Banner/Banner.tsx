export const getCharacter = ({ index }:any): Promise<any> => {
    const url = `https://rickandmortyapi.com/api/character/${index}`;

    return new Promise((resolve) => {
        setTimeout( () => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
        },3000 )
    })

}


async function Banner({ data }:any) {
    const character = await getCharacter(data);
  return (
    <div>
        Name: {character.name}
    </div>
  )
}

export default Banner