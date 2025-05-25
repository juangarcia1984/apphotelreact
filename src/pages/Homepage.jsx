import Menu from "../components/Menu"
import Banner from "../components/Banner"
import Rooms from "../components/Rooms"
import About from "../components/About"
import Ours from "../components/Ours"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


export default function Homepage() {
  return (
    <div>
             <Menu />
             <Banner />
             <div className="w3-content" style={{"maxWidth":"1532px"}}>
              <Rooms />
              <About />
              <Ours />
              <Contact />
             </div>
             <Footer />
    </div>
  )
}
