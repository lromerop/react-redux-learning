import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCharacters,
  fetchChangePage,
  fetchRandomPage,
} from "../../services/swapi";
import "./characters.css";

function Characters() {
  const { data, characters, loading } = useSelector(
    (state) => state.characters
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  const listCharacters = () => {
    return characters.map((character, index) => {
      return <li key={index}>{character.name}</li>;
    });
  };

  const randomNumber = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="list">{loading ? listCharacters() : "Cargando..."}</ul>
        </div>
        <div className="text-center">
          {data.previous ? (
            <button
              type="button"
              className="btn btn-dark m-1"
              onClick={() => dispatch(fetchChangePage(data.previous))}
            >
              Previous
            </button>
          ) : null}
          <button
            type="button"
            className="btn btn-dark m-1"
            onClick={() => dispatch(fetchRandomPage(randomNumber()))}
          >
            Random
          </button>
          {data.next ? (
            <button
              type="button"
              className="btn btn-dark m-1"
              onClick={() => dispatch(fetchChangePage(data.next))}
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Characters;
