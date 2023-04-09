import React from "react";
import "./Error.scss";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="error">
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
        <Link to='/' className="link">Home</Link>
      </div>
    </div>
  );
};

export default Error;
