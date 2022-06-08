import './Map.css'
import Place from '../Place/Place'

const Map = () => {
  return (
    <div className="map-body">
      <Place placeNumber='1'></Place>
      <Place placeNumber='2'></Place>
      <Place placeNumber='3'></Place>
      <Place placeNumber='4'></Place>
    </div>
  )
}


export default Map