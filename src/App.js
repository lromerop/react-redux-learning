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
        <Characters />
      </Provider>
    </div>
  );
}

export default App;
