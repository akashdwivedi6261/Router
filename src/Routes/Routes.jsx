import React from "react";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";
import Show from "./Show";
const Routes = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Route path="/" exact>
        <Show />
      </Route>
      <Route path="/about">
        <h1>About Page</h1>
      </Route>
      <Route path="/users">
        <h1>Users Page</h1>
      </Route>
    </>
  );
};

export { Routes };
