"use client";

import s from "./MapsSection.module.scss"

import {useMainContext} from "@/app/MainContext";

const MapsSection = ({className}) => {
    const {blocksRef} = useMainContext()

    const newRef = (el) => blocksRef.current[5] = el

    return (
        <div ref={newRef} className={[s.wrapper, className].join(" ")}>
            <p className={[s.locationTitle].join(" ")}>We have a convenient <br/>
                location to serve you:</p>
            <div className={s.map}>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7242606075774!2d-118.22639922482652!3d33.97392612186251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c93ece8c8a35%3A0x8775f77f16dd5a07!2sAzul%20Pawn%20Shop%20Huntington%20Park!5e0!3m2!1sru!2sua!4v1721320016037!5m2!1sru!2sua"
                        width="300" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p className={s.mapDescription}>Azul Pawn Shop Huntington <br/>
                        Park 2644 E Florence Ave, <br/>
                        Huntington Park, CA 90255</p>
                </div>

            </div>
        </div>
    );
};

export default MapsSection;