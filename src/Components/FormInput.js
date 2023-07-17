import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryDetails } from "../store/country";
const data = [
  {
    country: "India",
    currency: "INR(₹)",
    speed: "kmph",
    distanceVolume: "km & m^3",
    timezone: "IST",
  },
  {
    country: "United States",
    currency: "USD($)",
    speed: "mph",
    distanceVolume: "foot & gallons",
    timezone: "EST",
  },

  {
    country: "United Kingdom",
    currency: "Pound(£)",
    speed: "mph",
    distanceVolume: "miles & ft^3",
    timezone: "GMT",
  },
];
function FormInput(props) {
  const [val, onChangeSelect] = useState({});
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.country.darkMode);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (val === "1") {
      const countrydetail = {
        location: { lat: 20.5937, lng: 78.9629 },
        detail: data[0],
      };
      console.log(data[0]);
      dispatch(countryDetails.setCountryDetails(countrydetail));
    } else if (val === "2") {
      const countrydetail = {
        location: { lat: 39.7392, lng: -104.9903 },
        detail: data[1],
      };
      dispatch(countryDetails.setCountryDetails(countrydetail));
    } else if (val === "3") {
      const countrydetail = {
        location: { lat: 51.5072, lng: 0.1276 },
        detail: data[2],
      };
      dispatch(countryDetails.setCountryDetails(countrydetail));
    }
  };
  return (
    <div className="row">
      <div className={`col-12 my-2 `}>
        <div class={`card shadow ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div class="card-body my-4">
            <form>
              <div class="mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) => onChangeSelect(e.target.value)}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">India</option>
                  <option value="2">United States</option>
                  <option value="3">United Kingdom</option>
                </select>
              </div>

              <div className="d-grid mt-2">
                <button
                  type="submit"
                  class="btn btn-primary rounded-pill mx-2 my-2"
                  onClick={handleSubmit}
                >
                  LOAD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
