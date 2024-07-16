import s from "./PhoneImage.module.scss"
import phone from "../../icons/phone-icon-mobile.png";
import Image from "next/image";

const PhoneImage = () => {
    return (
        <a href="tel:3106800776" className={s.wrapper}>
            <Image src={phone} alt="Phone Image" />
        </a>
    );
};

export default PhoneImage;