
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/home'

function App() {

  return (
    <>

      <Header/>
      <Outlet/>
      <Footer/>
  
    </>
  )
}

export default App
 