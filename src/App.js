import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from'./Navbar';
import InputPage from './InputPage';
import LandingPage from './LandingPage';
function App() {
    

    return (
      <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/input" element={<InputPage />} />
        </Routes>
      </Router>
      </>
    );
}
export default App;