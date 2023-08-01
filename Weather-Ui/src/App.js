import "./App.css";
import React, { PureComponent } from "react";
// import back from "./mountain.jpeg";
import Humidity from "./components/Humidity/Humidity";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// const Array= [{humidity: 20,temp:30},{humidity: 10,temp:20},{humidity: 40,temp:10}];
// const data = [
//   { humidity: 23, temp: 10, pv: 200, amt: 240 },
//   { humidity: 29, temp: 20, pv: 240, amt: 200 },
//   { humidity: 60, temp: 10, pv: 400, amt: 200 },
//   { humidity: 40, temp: 30, pv: 400, amt: 200 },
//   { humidity: 10, temp: 26, pv: 400, amt: 200 },
//   { humidity: 20, temp: 23, pv: 400, amt: 200 },
//   { humidity: 45, temp: 32, pv: 400, amt: 200 },
//   { humidity: 56, temp: 29, pv: 400, amt: 200 },
// ];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
// const RADIAN = Math.PI / 180;
// const data = [
//   { name: 'A', value: 80, color: '#ff0000' },
//   { name: 'B', value: 45, color: '#00ff00' },
//   { name: 'C', value: 25, color: '#0000ff' },
// ];
// const cx = 150;
// const cy = 200;
// const iR = 50;
// const oR = 100;
// const value = 50;

// const needle = (value, data, cx, cy, iR, oR, color) => {
//   let total = 0;
//   data.forEach((v) => {
//     total += v.value;
//   });
//   const ang = 180.0 * (1 - value / total);
//   const length = (iR + 2 * oR) / 3;
//   const sin = Math.sin(-RADIAN * ang);
//   const cos = Math.cos(-RADIAN * ang);
//   const r = 5;
//   const x0 = cx + 5;
//   const y0 = cy + 5;
//   const xba = x0 + r * sin;
//   const yba = y0 - r * cos;
//   const xbb = x0 - r * sin;
//   const ybb = y0 + r * cos;
//   const xp = x0 + length * cos;
//   const yp = y0 + length * sin;
function App() {
  return (
    <div className="main-container">

      <Humidity/>
      {/* <div className="inner-container">
        <img src={back} />
      </div>
      <div className="chart-container">
        <h1>welcome back adam!</h1>
        <p>check out today weather information</p>

        <span class="material-icon">portrait</span>
        <div className="all-time-weather-info">
          <h2>upcomming hours</h2>
        
          <LineChart
            className="chart-info"
            width={600}
            height={200}
            data={data}
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
        <div class="grid-container">
          <div class="grid-item">
            <h6>Humidity</h6>

            <span class="material-icons logo">water_drop</span>

            <Humidity />
          </div>
          <div class="grid-item">
            {" "}
            <h6>Humidity</h6>
            <span class="material-icons logo">air</span>
          </div>
          <div class="grid-item">
            {" "}
            <h6>Humidity</h6>
            <span class="material-icons logo">thunderstorm</span>
          </div>
          <div class="grid-item">
            {" "}
            <h6>Humidity</h6>
            <span class="material-icons logo">wb_sunny</span>
          </div>
          <div class="grid-item">
            {" "}
            <h6>Humidity</h6>
            <span class="material-icons logo">thermostat</span>
          </div>
          <div class="grid-item">
            {" "}
            <h6>Humidity</h6>
            <span class="material-icons logo">umbrella</span>
          </div>
        </div>
      </div> */}
      {/* <div>a</div>
      <div>b</div> */}
      
    </div>
  );
}

export default App;
/* eslint-disable no-shadow */
// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Cell } from 'recharts';

// const RADIAN = Math.PI / 180;
// const data = [
//   { name: 'A', value: 80, color: '#ff0000' },
//   { name: 'B', value: 45, color: '#00ff00' },
//   { name: 'C', value: 25, color: '#0000ff' },
// ];
// const cx = 150;
// const cy = 200;
// const iR = 50;
// const oR = 100;
// const value = 50;

// const needle = (value, data, cx, cy, iR, oR, color) => {
//   let total = 0;
//   data.forEach((v) => {
//     total += v.value;
//   });
//   const ang = 180.0 * (1 - value / total);
//   const length = (iR + 2 * oR) / 3;
//   const sin = Math.sin(-RADIAN * ang);
//   const cos = Math.cos(-RADIAN * ang);
//   const r = 5;
//   const x0 = cx + 5;
//   const y0 = cy + 5;
//   const xba = x0 + r * sin;
//   const yba = y0 - r * cos;
//   const xbb = x0 - r * sin;
//   const ybb = y0 + r * cos;
//   const xp = x0 + length * cos;
//   const yp = y0 + length * sin;

//   return [
//     <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
//     <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
//   ];
// };

// export default class Example extends PureComponent {
//   render() {
//     return (
// <PieChart width={400} height={500}>
//   <Pie
//     dataKey="value"
//     startAngle={180}
//     endAngle={0}
//     data={data}
//     cx={cx}
//     cy={cy}
//     innerRadius={iR}
//     outerRadius={oR}
//     fill="#8884d8"
//     stroke="none"
//   >
//     {data.map((entry, index) => (
//       <Cell key={`cell-${index}`} fill={entry.color} />
//     ))}
//   </Pie>
//   {needle(value, data, cx, cy, iR, oR, '#d0d000')}
// </PieChart>
//     );
//   }
// }
