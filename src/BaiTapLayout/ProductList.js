import React from "react";
import Productitem from "./Productitem";

export default function ProductList() {
  return (
    <section id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="container">
        <div className="row">
          <Productitem />
          <Productitem />
          <Productitem />
          <Productitem />
          <Productitem />
        </div>
      </div>
    </section>
  );
}
