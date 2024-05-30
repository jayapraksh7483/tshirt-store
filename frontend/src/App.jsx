import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Navbar from './components/navbar/navbar';
 import Homepage from './pages/homepage/homepage';
 import Cartpage from './pages/cartpage/cartpage';
 
 const App = () => {


  
   return (
  
       <div>
         <Navbar />
         <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/cart" element={<Cartpage />} />
         </Routes>
       </div>

   );
 };
 
 export default App;
 