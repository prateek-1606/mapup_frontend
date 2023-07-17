import React from "react";
import { useSelector } from "react-redux";

function Card(props) {
  const data = useSelector((state) => state.country.data);
  console.log("Data", data);
  return (
    <div className="card border-0" style={{ width: 300 }}>
      <div className="card-body">
        <h4 class="card-title text-center">{data.country}</h4>
        <ul class="list-group ">
          <li class="list-group-item d-flex justify-content-between align-items-center border-0">
            <h6 className="text-dark">Currency</h6>
            <h6 className="text-secondary">{data.currency}</h6>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center border-0">
            <h6 className="text-dark">Unit of Speed</h6>
            <h6 className="text-secondary">{data.speed}</h6>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center border-0">
            <h6 className="text-dark">{"Dist & Vol"}</h6>
            <h6 className="text-secondary">{data.distanceVolume}</h6>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center border-0">
            <h6 className="text-dark">Timezone</h6>
            <h6 className="text-secondary">{data.timezone}</h6>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
