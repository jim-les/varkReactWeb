import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import home from './pages/home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
