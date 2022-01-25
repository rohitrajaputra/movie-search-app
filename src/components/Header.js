import React, { useState } from "react";

const Header = (props) => {
  const [searchTerm, setsearchTerm] = useState("");
  const [timeoutId, settimeoutId] = useState();
  const inputHandler = (input) => {
    clearTimeout(timeoutId);
    setsearchTerm(input);
    //debouncing the input to make API Call
    const id = setTimeout(() => {
      props.inputHandler(input);
    }, 500);
    settimeoutId(id);
  };

  return (
    <div className="ui top attached menu">
      <div className="" style={{ margin: "auto" }}>
        <h2>
          <span style={{ color: "red" }}>Movie</span>zz
        </h2>
      </div>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => inputHandler(e.target.value)}
            />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
