import React from "react";

const Street = ({ stateInfo }) => {
  return (
    <ul>
      {Object.entries(stateInfo).map(([k, v]) => {
       return <li key={k}>{k} : {v}</li>;
      })}
    </ul>
  );
};

export default Street;
