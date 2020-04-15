import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home"

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
  </>
);