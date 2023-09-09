import Card from '@/components/Card/Card'
import React from 'react'
import { getCharacteres } from './services'
import Navigator from '@/components/Navigator/Navigator'
import { Routes } from '@/models/routes.model'

async function fetchCharacteres(){
  return await getCharacteres()
}

async function Characteres() {
  const characteres = await fetchCharacteres()
  // console.log(characteres)
  return (
    <>
    <Navigator pathNames={ [ Routes.HOME, Routes.CHARACTERES, Routes.LOCATIONS ] } />
       {
        characteres.map((character) => (
          <Card key={character.id} data={character} ></Card>
        ))
       }
    </>
  )
}

export default Characteres