import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/Github/Github.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='/home/:userID' element={<User/>}/>
          <Route path='github' element={<GitHub/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);