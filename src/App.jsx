import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import ProductList from "./components/ProductList";

import reset from "./sass/abstracts/_reset.scss";

const App = () => {
  return (
    <div className="App">
      <Introduction />
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;
