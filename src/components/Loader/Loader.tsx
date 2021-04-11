import React from "react";
import "./Loader.scss";

const Loader = (props: { text: string; showSpinner: boolean }) => {
  return (
    <>
      <div className="search_status">
        {props.showSpinner ? (
          <div className="search_status--spinner"></div>
        ) : null}
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Loader;
