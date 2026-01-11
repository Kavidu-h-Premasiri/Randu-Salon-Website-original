import "bootstrap/dist/css/bootstrap.min.css"
import Signup from "./pages/Signup"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Appointment from "./pages/Appointment"
import ProtectedRoute from "./ProtectedRoute"

function App() {
  return (
    <div>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* PROTECTED */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/service"
          element={
            <ProtectedRoute>
              <Services />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  )
}

export default App
