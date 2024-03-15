/* eslint-disable no-undef */
import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MovieContext, ThemeContext } from "./Context/Context";
import Page from "./Layout/Page/Page";
import { cartReducer, initialState } from "./Reducers/CartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState); 
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
