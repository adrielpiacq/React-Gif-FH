import React, { useState, useEffect } from 'react'
import getGifs from '../helpers/getGifs'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../helpers/useFetchGifs'

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category)
  // const [ images, setImages ] = useState([])

  // isLoading && return (<div>Loading...</div>)

  return (
    <div>
      { isLoading && <h3>Está cargando...</h3> }
      <h3>{category}</h3>
      <div className='card-grid'>
        { images.map( image => <GifItem key={image.id} {...image}/> )}
      </div>
    </div>
  )
}


