import React from "react";
import { useSelector } from "react-redux";
import Auth from './views/Auth';
import Home from './views/Home';
import EorderItems from './views/EorderItems';
import ListItems from './views/ListInventory';
import AddItems from './views/AddItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequestList from "./views/RequestList";
function App() {
  const token = Boolean(useSelector((state) => state.token));
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Home /> : <Auth />} index />
          <Route path="/orderItems" element={token ? <EorderItems /> : <Auth />} />
          <Route path="/listItems" element={token ? <ListItems /> : <Auth />} />
          <Route path="/addItem" element={token ? <AddItems /> : <Auth />} />
          <Route path="/listRequests" element={token ? <RequestList /> : <Auth />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
