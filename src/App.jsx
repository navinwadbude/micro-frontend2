import React,{useState} from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
import Header from "home/Header";

import "./index.scss";

const App = () => {
  const [value, setValue] = useState(false);
  return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header value={value}/>
    <div className="my-10" onClick={()=>setValue(!value)}>
      PDP Body Container
    </div>
    <Footer />
  </div>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
