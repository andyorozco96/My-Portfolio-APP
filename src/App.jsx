import React, { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import ProductList from "./components/ProductList";
import Skills from "./components/Skills";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";

//import reset from "./sass/abstracts/_reset.scss";
import style from "./sass/components/_app.module.scss";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? style.dark : ""}>
      <Toggle />
      <Introduction />
      <About />
      <ProductList />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
