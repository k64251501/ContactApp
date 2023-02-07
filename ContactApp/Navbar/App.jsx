import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import ContactApp from './ContactApp/ContactApp'
import Index from './Home/Index'
 class App extends Component {
  render() {
    return (
        <Router>
      <Navbar />
      <Routes>
        <Route path='/Contact' element={<ContactApp />} />
        <Route path='/index' element={<Index />} />
      </Routes>
      </Router>
    )
  }
}

export default App