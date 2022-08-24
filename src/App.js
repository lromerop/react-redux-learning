import Characters from "./components/characters/Characters";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <h1 className="title pt-2">Characters star wars </h1>
        <Characters />
      </Provider>
    </div>
  );
}

export default App;
