import React from "react";
import { NavigationBar } from "./NavigationBar";
import { Banner } from "./Banner";

export const Home = () => {
  return (
    <div className="Home">
      <NavigationBar />
      <Banner />
    </div>
  );
};
