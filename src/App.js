import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
import Routers from "./routes";
import { Provider } from "react-redux";
import RootReducer from "./redux/rootState";
import { createStore } from "redux";

const store = createStore(RootReducer);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Routers />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
