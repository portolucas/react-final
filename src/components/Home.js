import React, { useState } from "react";

import { CepService } from "../services/CepService";

import { useSelector, useDispatch } from "react-redux";

import { setThisCep, setAndress } from "../database/actions/actions";

import Neighborhood from "./Neighborhood";
import City from "./City";
import Street from "./Street";
import StateInfo from "./StateInfo";
import CityInfo from "./CityInfo";
import { _HookVerification } from "./HookVerification";

const Home = () => {
  const thisAndress = useSelector((state) => state);

  const dispatch = useDispatch();

  const [cep, setCep] = useState();

  const handleChange = (e) => {
    setCep(e.target.value);
  };

  const requestCats = async (value) => {
    const cepResults = await CepService.getAndress(value);
    dispatch(setAndress(cepResults));
    console.log(cepResults);
  };

  const handleSubmit = (e) => {
    if (_HookVerification(cep) === true) {
      dispatch(setThisCep(cep));
      requestCats(cep);
    } else {
      alert("CEP inválido" + cep.length);
    }
    e.preventDefault();
  };

  return (
    <>
      <form>
        <label>Digite um CEP válido</label>
        <br></br>
        <input onChange={handleChange} placeholder="CEP" type="text"></input>
        <button onClick={handleSubmit} type="submit">
          Consultar
        </button>
      </form>
      {thisAndress.andress !== undefined ? (
        <>
          <Neighborhood neigh={thisAndress.andress.data.bairro} />
          <City city={thisAndress.andress.data.cidade} />
          <Street street={thisAndress.andress.data.logradouro} />
          <h2>Estado Info:</h2>
          <StateInfo stateInfo={thisAndress.andress.data.estado_info} />
          <h2>Cidade Info:</h2>
          <CityInfo cityInfo={thisAndress.andress.data.cidade_info} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
