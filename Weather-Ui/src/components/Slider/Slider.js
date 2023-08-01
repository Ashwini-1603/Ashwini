import React from "react";
import "./Slider.css"
function Slider() {
  return (
    <div className="clr">
      <div className="d-flex justify-content-around">
        <span class="material-icons rounded-4">add_box</span>
        <span class="material-icons ">more_horiz</span>

        <span class="material-icons ">toggle_on</span>
      </div>

      <div
        className="d-flex  justify-content-around my-5 "
        style={{ fontSize: "10px" }}
      >
        <div>
          <p className="m-0">
            <span class="material-icons fs-6">call_made</span>New York,USA
          </p>
          <p className="m-0">Today 28 sept</p>
        </div>
        <div>
          <p className="fs-6 m-0">
            <span class="material-icons fs-6">arrow_circle_down</span>
            07:19
          </p>
          <p className="fs-6 m-0">
            <span class="material-icons fs-6">arrow_circle_up</span>
            07:19
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around">
        <span class="material-icons align-self-center">
          keyboard_arrow_left
        </span>
        <p className="fw-bold m-0 " style={{ fontSize: "60px" }}>
          27°
        </p>
        <span class="material-icons align-self-center">
          keyboard_arrow_right
        </span>
      </div>
      <p className="text-center fs-5">
        <span class="material-icons fs-6">wb_sunny</span>Sunny
      </p>
    </div>
  );
}

export default Slider;
