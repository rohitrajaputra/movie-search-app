import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Details from "./Details";

const Movies = (props) => {
  const KEY = process.env.REACT_APP_OMDB_KEY;
  const [movies, setMovies] = useState();
  const [flag, setFlag] = useState(false);
  const [details, setDetails] = useState();

  const onClickHandler = (id) => {
    setFlag(true);
    const getDetails = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${KEY}`
      );
      setDetails(response.data);
    };
    getDetails();
  };
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${props.searchTerm}&apikey=${KEY}`
      );
      setMovies(response.data.Search);
    };
    apiCall();
  }, [props.searchTerm]);
  return (
    <div style={{ marginTop: "50px" }}>
      {flag && (
        <Details
          details={details}
          onCancelHandler={() => {
            setFlag(false);
          }}
        />
      )}
      {movies?.length ? (
        <Cards movies={movies} onClickHandler={onClickHandler} />
      ) : (
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="search icon"></i>
            Search for any movie from the menu
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
