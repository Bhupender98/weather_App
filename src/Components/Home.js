import React, { useEffect, useState } from "react";

const Home = (props) => {
  console.log("this is props: ",props)

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  // const dayOfWeek = daysOfWeek[today.getDay()];

  return (
    <>
      {props.data == "" ? (
        <div className="spinner">
          <div className="spinner-border text-warning" role="status"></div>
        </div>
      ) : (
        <div className="container-fluid main-container">
          <div
            className="container-fluid row d-flex justify-content-between"
            style={{ height: "auto" }}
          >
            <div className="col-lg-4 col-md-4 ">
              <input
                type="search"
                name="search"
                onChange={props.handleChange}
                value={props.query}
              />
              <h1 className="py-4">{props.query.toUpperCase()}</h1>
              <h6>
                {props.data.list[0].dt_txt.slice(0, 10)}
                {daysOfWeek[today.getDay()]}
              </h6>
            </div>
            <div className="search-bar col-lg-8  col-md-8 ">
              <div className="title  col-lg-4">
                <img
                  src={`https://openweathermap.org/img/wn/${props.data.list[0].weather[0].icon}@2x.png`}
                  alt="weather_forcast"
                />
                <p>
                  <b>condition:</b>
                  {props.data.list[0].weather[0].main}{" "}
                </p>
                <p>
                  <b>Description:</b>{" "}
                  {props.data.list[0].weather[0].description}{" "}
                </p>
                <p>
                  <b>Wind speed:</b> {props.data.list[0].wind.speed} KM/h
                </p>
              </div>
              <div className="temperature col-lg-4">
                <h3>Temperature</h3>
                <p>
                  <b>Current Temp:</b> {props.data.list[0].main.temp}
                </p>
                <p>
                  <b>max. Temp:</b> {props.data.list[0].main.temp_max}
                </p>
                <p>
                  <b>Min. Temp:</b> {props.data.list[0].main.temp_min}
                </p>
                <p>
                  <b>Humidity:</b> {props.data.list[0].main.humidity}
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid upcoming-days  m-auto row d-flex">
            <div className="col-lg-2 col-md-3 ">
              <h6>{daysOfWeek[today.getDay() + 1]}</h6>
              <img
                src={`https://openweathermap.org/img/wn/${props.data.list[8].weather[0].icon}@2x.png`}
                alt="weather_forcast"
              />
              <p>
                <b>condition:</b>
                {props.data.list[8].weather[0].main}{" "}
              </p>
              <p>
                <b>Description:</b> {props.data.list[8].weather[0].description}{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-2 ">
              <h6>{daysOfWeek[today.getDay() + 2]}</h6>
              <img
                src={`https://openweathermap.org/img/wn/${props.data.list[16].weather[0].icon}@2x.png`}
                alt="weather_forcast"
              />
              <p>
                <b>condition:</b>
                {props.data.list[16].weather[0].main}
              </p>
              <p>
                <b>Description:</b> {props.data.list[16].weather[0].description}
              </p>
            </div>
            <div className="col-lg-2 col-md-2 ">
              <h6>{daysOfWeek[today.getDay() + 3]}</h6>
              <img
                src={`https://openweathermap.org/img/wn/${props.data.list[24].weather[0].icon}@2x.png`}
                alt="weather_forcast"
              />
              <p>
                <b>condition:</b>
                {props.data.list[24].weather[0].main}
              </p>
              <p>
                <b>Description:</b> {props.data.list[24].weather[0].description}
              </p>
            </div>
            <div className="col-lg-2 col-md-2 ">
              <h6>{daysOfWeek[today.getDay() + 4]}</h6>
              <img
                src={`https://openweathermap.org/img/wn/${props.data.list[32].weather[0].icon}@2x.png`}
                alt="weather_forcast"
              />
              <p>
                <b>condition:</b>
                {props.data.list[32].weather[0].main}
              </p>
              <p>
                <b>Description:</b> {props.data.list[32].weather[0].description}
              </p>
            </div>
            <div className="col-lg-2 col-md-2 ">
              <h6>{daysOfWeek[today.getDay() + 5]}</h6>
              <img
                src={`https://openweathermap.org/img/wn/${props.data.list[39].weather[0].icon}@2x.png`}
                alt="weather_forcast"
              />
              <p>
                <b>condition:</b>
                {props.data.list[39].weather[0].main}
              </p>
              <p>
                <b>Description:</b> {props.data.list[39].weather[0].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
