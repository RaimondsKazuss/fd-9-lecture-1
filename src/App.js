import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import DataContext from "./DataContext";

const productData = {
  title: "product title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: "/imageurl",
};

//prop drilling example
function App() {
  return (
    <div className="App">
      <DataContext.Provider value={productData}>
        <CardContainer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
