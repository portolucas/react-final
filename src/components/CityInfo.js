import React from "react";

const CityInfo = ({ cityInfo }) => {
  return (
    <ul>
      {Object.entries(cityInfo).map(([k, v]) => {
       return <li key={k}>{k} : {v}</li>;
      })}
    </ul>
  );
};

export default CityInfo;
