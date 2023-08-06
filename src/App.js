import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import Payment from './pages/Payment';
import CurrentPlan from './pages/CurrentPlan';
import CancelledPlan from './pages/CancelledPlan';


function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/currentplan' element={<CurrentPlan/>}/>
          <Route path='/cancelledplan' element={<CancelledPlan/>}/>
          
        
        
        
        </Routes>
      
      
        </div>
    
    </Router>
      
    
  );
}

export default App;
