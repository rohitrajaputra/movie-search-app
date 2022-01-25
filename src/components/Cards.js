import React from "react";

const Cards = (props) => {
  //mapping each item and returning the JSX
  const renderList = props.movies.map((movie) => {
    const id = `${movie.Title}${movie.Year}`;
    const title = movie.Title;
    return (
      <div
        className="red card"
        style={{ cursor: "pointer" }}
        key={id}
        onClick={() => {
          props.onClickHandler(movie.imdbID);
        }}
      >
        <div className="image">
          <img
            alt={title}
            src={movie.Poster}
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="content">
          <p className="header">{movie.Title}</p>
          <div className="description">
            <div className="ui horizontal label">{movie.Year}</div>
            <div className="ui horizontal label">{movie.Type}</div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ui four stackable cards ">{renderList}</div>;
};

export default Cards;
