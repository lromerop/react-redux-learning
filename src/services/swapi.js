import axios from "axios";
import {
  setCharacters,
  changePage,
  randomPage,
} from "../store/slice/characters";

export const fetchAllCharacters = () => (dispatch) => {
  axios
    .get("https://swapi.dev/api/people")
    .then((response) => {
      dispatch(setCharacters(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchRandomPage = (number) => (dispatch) => {
  axios
    .get("https://swapi.dev/api/people/?page=" + number)
    .then((response) => {
      dispatch(randomPage(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchChangePage = (url) => (dispatch) => {
  axios
    .get(url)
    .then((response) => {
      dispatch(changePage(response.data));
    })
    .catch((error) => console.log(error));
};
