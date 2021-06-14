
import React from "react";
import axios from "axios";
const AxiosComponent = () => {
  const getData = () => {
    axios
      .get("https://newsapi.org/v2/everything?qInTitle=비트코인&from=2021-04-26&sortBy=publishedAt&apiKey=6eca200bc816404da1d8871971ef2456&language=ko")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div>
      <button onClick={getData}>데이터 가져오기</button>
    </div>
  );
};

export default AxiosComponent;