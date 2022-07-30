import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import Contactus from './components/foodya/contactus/Contactus';
import Menu from './components/foodya/menu/Menu';
import Navbar from './components/foodya/navbar/Navbar';
import Aboutus from './components/foodya/aboutus/Aboutus';
import OurChefs from './components/foodya/slider/OurChefs';
import Home from './components/foodya/home/Home';
import Footer from './components/foodya/footer/Footer';
import PageNotF from "./components/foodya/pagenotfound/PageNotF"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<App/>}> </Route>
          <Route path='/contactus' element={<Contactus/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/ourchefs' element={<OurChefs/>} />
          <Route path='/delivery' element={<Home/>} />
          <Route path='*' element={<PageNotF/>}/>
            
        </Routes>
        <Footer/>
      </BrowserRouter>
       
);





