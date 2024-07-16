import s from "./MapsSection.module.scss"
import {Noto_Serif_JP} from "next/font/google";

const noto = Noto_Serif_JP({ subsets: ["latin"], weight: "600" })


const MapsSection = ({newRef, className}) => {
    return (
        <div ref={newRef} className={[s.wrapper, className].join(" ")}>
            <p className={[noto.className, s.locationTitle].join(" ")}>We have two convenient <br/>
                locations to serve you:</p>
            <div className={s.map}>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3990613734686!2d-118.4163091248249!3d34.007966220067864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba3f0390946d%3A0xb7df54a95e649201!2s4025%20Sepulveda%20Blvd%2C%20Culver%20City%2C%20CA%2090230%2C%20USA!5e0!3m2!1sen!2sua!4v1720777785751!5m2!1sen!2sua"
                        width="300" height="300" style={{border: "0"}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p className={s.mapDescription}>4025 Sepulveda Blvd, Culver City, <br/>
                        CA 90230 <br/>
                        <a href="tel:3103987296">310-398-7296</a> <br/>
                        9:00 AM to 6:00 PM</p>
                </div>
                <div className={s.mapBlock}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.0996308916347!2d-118.35554972482805!3d33.93856552372521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b6f34ec81a73%3A0xa66c775177e81f97!2s10721%20Hawthorne%20Blvd%2C%20Lennox%2C%20CA%2090304%2C%20USA!5e0!3m2!1sen!2sua!4v1720778078027!5m2!1sen!2sua"
                        width="300" height="300" style={{border: "0"}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p className={s.mapDescription}>10721 Hawthorne Blvd, <br/>
                        Inglewood, <br/>
                        CA 90304 <br/>
                        <a href="tel:3106800776">310-680-0776</a> <br/>
                        9:00 AM to 6:00 PM</p>
                </div>
            </div>
        </div>
    );
};

export default MapsSection;