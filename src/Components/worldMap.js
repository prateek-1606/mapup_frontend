import React, { useEffect, useRef, useState } from "react";
import { Map, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import osm from "../osm_provider";
import "../App.css";
import "leaflet/dist/leaflet.css";
import { Tooltip } from "leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import Card from "./card";
function WorldMap(props) {
  const [ZOOM_LEVEL, setZoomLevel] = useState(5);
  const location = useSelector((state) => state.country.location);
  const countrySelected = useSelector((state) => state.country.countrySelected);
  const mapRef = useRef();
  useEffect(() => {
    if (location) {
      const { current = {} } = mapRef;
      const { leafletElement: map } = current;
      map.flyTo(location, 5);
      console.log(location);
    }
  }, [location]);
  const openPopup = (marker) => {
    if (marker && marker.leafletElement) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup();
      });
    }
  };
  console.log("World Map");
  return (
    <>
      <div>
        <div className="row">
          <div className="col text-center" style={{marginTop:"60px"}} >
            <div>
              <Map
                center={location}
                zoom={ZOOM_LEVEL}
                ref={mapRef}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url={osm.maptiler.url}
                  attribution={osm.maptiler.attribution}
                />
                {countrySelected && (
                  <Marker
                    position={location}
                    ref={openPopup}
                    icon={L.icon({
                      iconUrl: `abc`,
                      iconSize: [48],
                    })}
                  >
                    <Popup>
                      <Card />
                    </Popup>
                  </Marker>
                )}
              </Map>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorldMap;
