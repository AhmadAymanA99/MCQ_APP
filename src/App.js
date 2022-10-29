import "./App.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";

import Navigation from "./components/Navigation";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
      </div>
    </Provider>
  );
}

export default App;
