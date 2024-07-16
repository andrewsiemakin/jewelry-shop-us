import s from "./PhoneImage.module.scss"
import phone from "../../icons/phone-icon-mobile.png";
import Image from "next/image";

const PhoneImage = () => {
    return (
        <button className={s.wrapper}>
            <Image src={phone} alt="Phone Image" />
        </button>
    );
};

export default PhoneImage;