import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/*<Navbar/>*/}
      <Header/>

      <Outlet/>

      <Footer/>
    </>
  )
}

export default App
