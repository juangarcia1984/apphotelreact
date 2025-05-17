import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Roomspage from "./pages/Roomspage";
import Contactpage from "./pages/Contactpage";
import Notfoundpage from "./pages/Notfoundpage";
import Roomdetailspage from "./pages/Roomdetailspage";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/Rooms" element={<Roomspage />} />
        <Route path="/Rooms/:id" element={<Roomdetailspage />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </div>
  )
}

export default App
