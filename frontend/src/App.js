import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {Room} from "@material-ui/icons";

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 40.146720,
    longitude: 26.408587,
    zoom: 5
  });
  return (
    <div className="App">
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      mapStyle="mapbox://styles/frkny/ckv71xi0986en14o36lo2pt0l"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
    <Marker 
    latitude={40.146720} 
    longitude={26.408587} 
    offsetLeft={-20} 
    offsetTop={-10}
    >
      <Room />
      </Marker>
    </ReactMapGL>
    </div>
  );
}

export default App;
