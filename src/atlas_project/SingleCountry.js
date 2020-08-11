import React from "react";
import { Link } from "react-router-dom";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
function SingleCountry(props) {
  let item = props.item;
  return (
    <div className="p-2 row">
      <img src={item.flag} className="p-2 col-lg-4 w-50" />
      <div className="p-4 col-lg-4">
        <h5>
          <b>{item.name}</b>
        </h5>
        <div>region: {item.region}</div>
        <div>capital: {item.capital}</div>
        <div>population: {item.population}</div>
        <div>languages: {item.languages[0].name}</div>
        <div>currencies: {item.currencies[0].name}</div>
        <nav className="d-flex justify-content-between">
          {item.borders.map((borderItem) => {
            return <Link to={`/alpha/${borderItem}`}>{borderItem}</Link>;
          })}
        </nav>
      </div>
      {/* <div className="col-lg-4 mt-4">
        <Map center={[item.latlng[0], item.latlng[1]]} zoom={10}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      </div> */}
    </div>
  );
}

export default SingleCountry;
