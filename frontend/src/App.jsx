import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost, Login } from "./pages";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";
const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex items-center justify-between bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
      
      <div><Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-sky-700 m-1 "
        >
          Create
        </Link>
        <Link
          to="/login"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-sky-700"
        >
          Login
        </Link></div>
        
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh -73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
