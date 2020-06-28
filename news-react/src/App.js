import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./mock.js";
import './tailwind.generated.css';
import HeadlineList from "./components/headlines/HeadlineList";
function App() {
  console.log(data);
  return (<div className="bg-gray-300 ">

    <div className="container mx-auto">
      <HeadlineList data={data.articles} />
    </div>
  </div>
  );
}

export default App;
