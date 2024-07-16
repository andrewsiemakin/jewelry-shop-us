import s from "./SuccessfulPopup.module.scss"

import {Noto_Serif_JP} from "next/font/google";
import {Montserrat} from "next/font/google";

import Portal from "@/components/Portal";

import { LuLoader2 } from "react-icons/lu";

const noto = Noto_Serif_JP({ weight: "600", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

const SuccessfulPopup = ({open, loading = false, onClose}) => {

    return (
        <Portal open={open}>
            <div className={s.wrapper}>
                {
                    loading ?
                    <LuLoader2 className={s.loader}/> :
                        <>
                            <h2 className={[noto.className, s.title].join(" ")}>Everything was successful</h2>
                            <p className={[montserrat.className, s.description].join(" ")}>We will contact you as soon
                                as possible</p>
                            <button className={s.btn} onClick={onClose}>OK</button>
                        </>
                }
            </div>
        </Portal>
    )
}

export default SuccessfulPopup