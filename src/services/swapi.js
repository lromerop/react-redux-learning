import axios from "axios";
import { setPeopleList, changePageList } from "../store/slice/peoples";

export const fetchAllPeoples = () => (dispatch) => {
  axios
    .get("https://swapi.dev/api/people")
    .then((response) => {
      dispatch(setPeopleList(response.data.results));
    })
    .catch((error) => console.log(error));
};

export const fetchOtherPage = (id) => (dispatch) => {
  axios
    .get("https://swapi.dev/api/people/?page=" + id)
    .then((response) => {
      dispatch(changePageList(response.data.results));
    })
    .catch((error) => console.log(error));
};
