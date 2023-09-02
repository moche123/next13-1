import Card from '@/components/Card/Card'
import React from 'react'
import { getCharacteres } from './services'

async function fetchCharacteres(){
  return await getCharacteres()
}

async function Characteres() {
  const characteres = await fetchCharacteres()
  // console.log(characteres)
  return (
    <>
       {
        characteres && characteres.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))
       }
    </>
  )
}

export default Characteres