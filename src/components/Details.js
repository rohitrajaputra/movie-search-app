import React from "react";

const Details = (props) => {
  return props.details !== undefined ? (
    <div className="ui stackable message">
      <i className="red close icon" onClick={() => props.onCancelHandler()}></i>
      <img
        alt="dfgs"
        className="ui small left floated image"
        src={props.details.Poster}
      ></img>
      <div className="header">{props.details.Title}</div>
      <p>Actors : {props.details.Actors}</p>
      <p>Awards : {props.details.Awards}</p>
      <p>BoxOffice : {props.details.BoxOffice}</p>
      {/* <p>Country : {props.details.Country}</p> */}
      <p>Director : {props.details.Director}</p>
      <p>Language : {props.details.Language}</p>
      <p>Genre : {props.details.Genre}</p>
      <div className="item">
        <div className="ui horizontal label">
          IMDB : {props.details.imdbRating}
        </div>
        <div className="ui horizontal label">Rated : {props.details.Rated}</div>
        <div className="ui horizontal label">
          Runtime : {props.details.Runtime}
        </div>
        <div className="ui horizontal label">Year : {props.details.Year}</div>
      </div>
      <div className="ui basic center aligned segment">
        <p>{props.details.Plot}</p>
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default Details;
