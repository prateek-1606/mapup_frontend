import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../sidePannel.css";
import FormInput from "./FormInput";
import { countryDetails } from "../store/country";
function Navbar(props) {
  const [toogle, setToogle] = useState(false);
  const darkMode = useSelector((state) => state.country.darkMode);
  const dipatch = useDispatch();
  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (
        !document.querySelector(".navbar-brand").contains(e.target) &&
        !document.querySelector("#mySidepanel").contains(e.target)
      ) {
        ToogleNav(0, false);
      }
    });
  }, []);
  function ToogleNav(val, toogleVal) {
    document.getElementById("mySidepanel").style.width = val;
    setToogle(toogleVal);
  }
  return (
    <div>
      <div
        id="mySidepanel"
        class={`sidepanel mt-5 ${toogle ? "px-3" : ""} ${
          darkMode ? "bg-dark" : "bg-white"
        }`}
      >
        <a
          href="javascript:void(0)"
          class="closebtn"
          onClick={() => ToogleNav(0, false)}
        >
          &times;
        </a>
        <div>
          <FormInput />
          <div className="d-flex justify-content-between align-itmes-center mt-4">
            <h4 className={`${darkMode ? "text-white" : "text-dark"}`}>
              Dark Mode :{" "}
            </h4>
            <div class="form-check form-switch my-1">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={darkMode}
                onClick={(e) =>
                  dipatch(countryDetails.setDarkMode(e.target.checked))
                }
              />
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a
            class="navbar-brand openbtn"
            href="#"
            onClick={() =>
              toogle ? ToogleNav(0, false) : ToogleNav("300px", true)
            }
          >
            Mapup
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-2 mb-2 mb-lg-0 text-white ms-auto">
              <li class="nav-item me-3">Profile</li>

              <li class="nav-item me-3">Register</li>

              <li class="nav-item me-3">Login</li>

              <li class="nav-item me-3">Logout</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
