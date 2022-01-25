import React, { useState } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
function App() {
  const [searchTerm, setsearchTerm] = useState("");
  const searchHandler = (value) => {
    setsearchTerm(value);
  };
  return (
    <div>
      <Header inputHandler={searchHandler} />
      <div className="ui container">
        <Movies searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
