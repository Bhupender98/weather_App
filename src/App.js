import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./Components/Home";

const App = () => {
  const [query, setQuery] = useState("sirsa");

  const [data, setData] = useState([]);
  let API = `https://api.openweathermap.org/data/2.5/forecast/?q=${query}&appid=3c8c80fe1469bc8477320e98303f8e04&cnt=40`;

  // get data from api
  async function getApiData(API) {
    try {
      const response = await axios.get(API);
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  
  // call api using useEffect
  useEffect(() => {
    getApiData(API);
  }, [query]);


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // console.log("query",query)
  // console.log(data)

  return (
   <Home data = {data} handleChange={handleChange} query={query}/>
  );
};

export default App;
