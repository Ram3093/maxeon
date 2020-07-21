import React from 'react';
import { BrowserRouter  } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'

// import Navbar from './components/navigation/navbar'


function App() {
  return (
    <BrowserRouter>
              <div className="app">
                    < Dashboard />
                    
                    {/* <Route exact path='/' component={ Navbar } />
                    <Route path='/products' component={ Navbar } />
                    <Route path='/features' component={ Navbar } />
                    <Route path='/usecases' component={ Navbar } />
                    <Route path='/pricing' component={ Navbar } />
                    <Route path='/login' component={ Navbar } />  */}
              </div>
    </BrowserRouter>
  );
}

export default App;
