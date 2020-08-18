import React from "react";
import "./styles.scss";

export default function PageTitle({name}) {
  return (
    <h3 className="page-title font-weight-bold">
      <span id="selected-category" className="text-uppercase"></span> {name}
    </h3>
  );
}
