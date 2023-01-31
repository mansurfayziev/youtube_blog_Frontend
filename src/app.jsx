import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./blogs";
import { Block } from "./style";

function App() {
  return (
    <Block>
      <Routes>
        <Route path="/" element={<Blogs />} />
      </Routes>
    </Block>
  );
}

export default App;
