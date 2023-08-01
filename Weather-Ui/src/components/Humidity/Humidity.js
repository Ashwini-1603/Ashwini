import React from "react";
import Wind from "../wind/Wind";
import GaugeChart from "react-gauge-chart";
import "./Humidity.css";
import Slider from "../Slider/Slider";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import mountain from "./mountain.png";
import sun from "./yellow-sun.png";
// import image from "../../mountain.jpeg";

const data1 = [
  { humidity: 23, temp: 10, pv: 200, amt: 240 },
  { humidity: 29, temp: 20, pv: 240, amt: 200 },
  { humidity: 60, temp: 10, pv: 400, amt: 200 },
  { humidity: 40, temp: 30, pv: 400, amt: 200 },
  { humidity: 10, temp: 26, pv: 400, amt: 200 },
  { humidity: 20, temp: 23, pv: 400, amt: 200 },
  { humidity: 45, temp: 32, pv: 400, amt: 200 },
  { humidity: 56, temp: 29, pv: 400, amt: 200 },
];
const data = [
  { value: 82, title: "Humidity", icon: "water_drop", datainfo: "82%" },
  { value: 8, title: "Wind", icon: "air", datainfo: " 8km/h" },
  {
    value: 60,
    title: "Precipitation",
    icon: "thunderstorm",
    datainfo: "1.4 cm",
  },
  { value: 40, title: "UV Index", icon: "wb_sunny", datainfo: "4 medium" },
  { value: 84, title: "Feels like", icon: "thermostat", datainfo: "30°" },
  { value: 10, title: "Chance of rain", icon: "umbrella", datainfo: "42%" },
];
function Humidity() {
  return (
    <div id="chart" className="main">
      <div className="image-div">
        {/* <span class="material-icons logo2">add_box</span>
        <span class="material-icons logo2">more_horiz</span>
        <span className="logo2">
          ℃<span class="material-icons logo2">toggle_on</span>℉
        </span>

        <span class="material-icons logo2">more_horiz</span>
        <h1>27℃</h1>
        <span class="material-icons logo2">more_horiz</span> */}
        <Slider />
        <img className="sun" src={sun} />
        <img src={mountain} />
      </div>
      <div className="data-info">
        <div>
          {" "}
          <h5 className="d-inline ml">welcome back Isabella!</h5>
          <div className="float-end mr">
            {" "}
            <span class="material-icons ">more_horiz</span>
            <span class="material-icons">image</span>
          </div>
        </div>

        <p className="ml">Check out todays weather information</p>
        <div className="upcoming-text grid-item">
          {/* <div className="d-flex" >
            {" "}
            <h2 className="">upcoming weather</h2>
           
            <p className="position-relative">rain precipitation  <span class="material-icons position-absolute">more_horiz</span></p>
            <p className="position-relative">next days <span class="material-icons position-absolute p3">more_horiz</span></p>
       
            
          </div> */}
          <div class="row mb-4">
            <div class="col-6">
              {" "}
              <h5 className="fw-bold ml">upcoming weather</h5>
            </div>
            <div class="col">
              {" "}
              <p className=" dropdown p-1 m-0 text-center">
                rain precipitation{" "}
                <span class="material-icons lh-lg  fs-6">expand_more</span>
              </p>
            </div>
            <div class="col">
            <p className=" dropdown p-1 m-0 text-center">
                rain precipitation{" "}
                <span class="material-icons lh-lg  fs-6"><span class="material-icons-outlined">
chevron_right
</span></span>
              </p>
            </div>
          </div>

          <LineChart
            className="chart-info "
            height={200}
            width={600}
            data={data1}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="humidity" fill="red" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

        <h5 className="ml">More details about todays weather</h5>
        <div className="all-weather-info">
          {data.map((item) => (
            <div class="grid-item">
              <div>
                <span>{item.title}</span>
                <span class="material-icons logo2">{item.icon}</span>
              </div>
              <h4>{item.datainfo}</h4>
              <div>
                <progress value={item.value} min="0" max="100"></progress>
              </div>

              {/* <div>
                <h6>{item.title}</h6>
                <span class="material-icons logo2">{item.icon}</span>
              </div>
            
              <h4>rufh</h4>
             
              <div>
                <progress value={item.value} min="0" max="100"></progress>
              </div> */}
            </div>
          ))}
          {/* <div class="grid-item">
            <h6>Humidity</h6>
            <span class="material-icons logo">water_drop</span>
            <div>
            <div>
            <progress value="75" min="0" max="100">
              </progress>
            </div>
            </div>
          </div>
          <div class="grid-item">
            <h6>Wind</h6>
            <span class="material-icons logo">air</span>
            <div>
            <progress value="75" min="0" max="100">
              </progress>
            </div>
          </div>
          <div class="grid-item">
            <h6>Precipitation</h6>
            <span class="material-icons logo">thunderstorm</span>
            <div>
            <progress value="75" min="0" max="100">
              </progress>
            </div>
          </div>
          <div class="grid-item">
            <h6>UV Index</h6>
            <span class="material-icons logo">wb_sunny</span>
            <div>
              <progress value="75" min="0" max="100"></progress>
            </div>
          </div>
          <div class="grid-item">
            <h6>Feels like</h6>
            <span className="material-icons logo">thermostat</span>
            <div>
              <progress value="75" min="0" max="100"></progress>
            </div>
          </div>
          <div class="grid-item">
            <h6>Chance of rain</h6>

            <span class="material-icons logo">umbrella</span>
            <div>
              {" "}
              <progress value="75" min="0" max="100"></progress>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Humidity;
