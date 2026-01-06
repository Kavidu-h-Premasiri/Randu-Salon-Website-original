import "bootstrap/dist/css/bootstrap.min.css"
import Signup from "./pages/Signup"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Appointment from "./pages/Appointment"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Services/>}></Route>
        <Route path="/appointment" element={<Appointment/>}></Route>
      </Routes>
    </div>
  )
}

export default App
