import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import User from "./pages/user/User";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
