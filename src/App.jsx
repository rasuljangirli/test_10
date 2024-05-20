import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./component/Loading";
function App() {
  return (
    <div>
      <Loading />
      <Header />
      <RouterConfig />
    </div>
  );
}

export default App;
