import { useState, useEffect } from "react"
import getGifs from "./getGifs"


export const useFetchGifs = (category) => {

  const [ images, setImages ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect( () => {
    getGifs(category)
      .then( resp => setImages(resp) )
    setIsLoading(false)
  }, []) // quiero que lo que está ade  ntro del useEffect se ejecute SOLO cuando el componente se MONTA

  return {
    images, 
    isLoading
  }
}