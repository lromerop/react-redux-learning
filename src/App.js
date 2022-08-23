import { useEffect } from "react";
import { getAllPeoples } from './services/swapi'
import People from "./components/people/People";
import { useDispatch } from "react-redux";
import { initPeople } from "./reducers/peopleReducer";
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    getAllPeoples().then((peoples) => {
      dispatch(initPeople(peoples));
    })
  }, [dispatch]);

  return (
    <div> 
      <h1 className="title">Personajes star wars </h1>
      <People />
    </div>
  );
}

export default App;
