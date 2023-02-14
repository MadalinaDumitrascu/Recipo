import { Route, Routes } from "react-router";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Ingredients from "./Pages/Ingredients"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Subscriptions from "./Pages/Subscriptions";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import React, { useEffect, useState } from "react";
import NotFound from "./Pages/NotFound";
import Checkout from "./Pages/Checkout";
import Recipes from "./Pages/Recipes";
import UserPage from "./Pages/UserPage";
import UserOptions from "./Pages/UserOptions";
import AddRecipe from "./Pages/AddRecipe";
import RecipePage from "./Pages/RecipePage";
import PaymentFailed from "./Pages/PaymentFailed";
import PaymentSuccess from "./Pages/PaymentSuccess";
import MapContainer from "./Components/MapContainer";
import UpdateRecipe from "./Pages/UpdateRecipe";




function App() {
  return (
    <div className="flex flex-col duration-700">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path="/Ingredients/:id" element={<Ingredients />} />
        <Route path='/Subscriptions' element={<Subscriptions />} />
        <Route path="/About" element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/404notfound' element={<NotFound />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path='/Recipes' element={<Recipes/>}/>
        <Route path='/User'element={<UserPage/>}/>
        <Route path='/User/Options' element={<UserOptions/>}/>
        <Route path='/Add-Recipe' element={<AddRecipe/>}/>
        <Route path='/Update/:id' element={<UpdateRecipe/>}/>
        <Route path='/Recipes/:id' element={<RecipePage/>} />
        <Route path='/Checkout/Failed' element={<PaymentFailed/>} />
        <Route path='/Checkout/Success' element={<PaymentSuccess />} />
        <Route path='/Map' element={<MapContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
