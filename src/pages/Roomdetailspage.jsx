import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState} from "react";





export default function Roomdetailspage() {
    let { id } = useParams();    
     let [roomsApi, setRoomsApi] = useState([]);
     let [selectedImg, setSelectedImg] = useState(0);
      async function getRooms() {
        try {
            let response = await axios.get(`http://localhost:3000/api/habitaciones/${id}`);
            setRoomsApi(response.data);
        } catch (error) {
            console.log("Error fetching rooms:",error);
        }
    }
     useEffect(() => {
        getRooms();
        // eslint-disable-next-line
    }, [id]);
    return (
        <>
            <Menu />
            <div classNameName="w3-container" id="apartment">
                <div className="w3-row-padding">
                    <div className="w3-half">
                        <h2 className="w3-text-green">The Apartment #{id}</h2>
                        {roomsApi.imagenes && roomsApi.imagenes.length > 0 && (
                            <img
                                src={roomsApi.imagenes[selectedImg]}
                                alt={`Room ${id}`}
                                style={{ width: "100%", marginBottom: "-6px" }}
                            />
                        )}
                        {/* Optional: Thumbnails for selecting images */}
                        {roomsApi.imagenes && roomsApi.imagenes.length > 1 && (
                            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                                {roomsApi.imagenes.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`Thumbnail ${i + 1}`}
                                        style={{
                                            width: "60px",
                                            height: "40px",
                                            objectFit: "cover",
                                            border: selectedImg === i ? "2px solid green" : "1px solid #ccc",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => setSelectedImg(i)}
                                    />
                                ))}
                            </div>
                        )}
                        
                    </div>
                    <div className="w3-half">
                        <div className="w3-container">
                            <h4><strong>The space</strong></h4>
                            <div className="w3-row w3-large">
                                <div className="w3-col s6">
                                    <p><i className="fa fa-fw fa-male"></i> Max people: {roomsApi.maxPeople}</p>
                                    <p><i className="fa fa-fw fa-bath"></i> Bathrooms: {roomsApi.bathrooms}</p>
                                    <p><i className="fa fa-fw fa-bed"></i> Bedrooms: {roomsApi.bedrooms}</p>
                                </div>
                                <div className="w3-col s6">
                                    <p><i className="fa fa-fw fa-clock-o"></i> Check In: After 3PM</p>
                                    <p><i className="fa fa-fw fa-clock-o"></i> Check Out: 12PM</p>
                                </div>
                            </div>
                            <hr />
                            <div className="w3-row w3-large">
                                <div className="w3-col s6">
                                    <h4><strong>The space</strong></h4>
                                    <p><i className="fa fa-fw fa-male"></i> Max people: 4</p>
                                    <p><i className="fa fa-fw fa-bath"></i> Bathrooms: 2</p>
                                    <p><i className="fa fa-fw fa-bed"></i> Bedrooms: 1</p>
                                </div>
                                <div className="w3-col s6">
                                    <p><i className="fa fa-fw fa-clock-o"></i> Check In: After 3PM</p>
                                    <p><i className="fa fa-fw fa-clock-o"></i> Check Out: 12PM</p>
                                </div>
                            </div>
                            <hr />

                        </div>
                    </div>
                    <div className="w3-row-padding">
                        <div className="w3-half">
                            <h4><strong>Extra Info</strong></h4>
                            <p>Our apartment is really clean and we like to keep it that way. Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>We accept: <i className="fa fa-credit-card w3-large"></i> <i className="fa fa-cc-mastercard w3-large"></i> <i className="fa fa-cc-amex w3-large"></i> <i className="fa fa-cc-cc-visa w3-large"></i><i className="fa fa-cc-paypal w3-large"></i></p>
                            <hr />
                            <h4><strong>Rules</strong></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Subscribe to receive updates on available dates and special offers.</p>
                            <p><button className="w3-button w3-green w3-third">Subscribe</button></p>
                        </div>
                        <div className="w3-half">
                            <div className="w3-container" id="contact">
                                <h2>Contact</h2>
                                <i className="fa fa-map-marker" style={{ "width": "30px" }}></i> Chicago, US<br />
                                <i className="fa fa-phone" style={{ "width": "30px" }}></i> Phone: +00 151515<br />
                                <i className="fa fa-envelope" style={{ "width": "30px" }}> </i> Email: mail@mail.com<br />
                                <p>Questions? Go ahead, ask them:</p>
                                <form>
                                    <p><input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" /></p>
                                    <p><input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" /></p>
                                    <p><input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" /></p>
                                    <button type="submit" className="w3-button w3-green w3-third">Send a Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}


