import './Map.css'
import Place from '../Place/Place'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'

const socket = io.connect("http://localhost:5000")

const Map = () => {
  
  const [state, setstate] = useState();

  useEffect(() => {
    socket.on('arduino:data', (data) => {

      console.log(data.value)
      if (data.value < 11 ){
        setstate(true)
        
      } else {
        setstate(false)
      }
    })

  })

  return (
    <div className="map-body">
      <Place placeNumber='1'></Place>
      <Place placeNumber='2' statePlace={state}></Place>
      <Place placeNumber='3'></Place>
      <Place placeNumber='4'></Place>
    </div>
  )
}


export default Map