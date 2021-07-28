import React from "react";
import "./PageCentre.scss";

const PageCentre = (props: any) => {
  return (
    <div className="page-centre-wrapper">
      <div className="page-centre">{props.children}</div>
    </div>
  );
};

export default PageCentre;
