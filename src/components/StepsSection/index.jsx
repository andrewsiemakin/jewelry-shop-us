import s from "./StepsSection.module.scss";

import stepOne from "../../images/step-one-image.svg";
import stepTwo from "../../images/step-two-image.svg";
import stepThree from "../../images/step-three-image.svg";
import jewelryHand from "../../images/gevelry-hand.png";

import Image from "next/image";
import {Noto_Serif_JP} from "next/font/google";

import Container from "@/components/Container";
import Button from "@/components/Button";

const noto = Noto_Serif_JP({ subsets: ["latin"], weight: "600" })

const StepsSection = ({newRef, className, handlePopup}) => {
    return (
        <Container newRef={newRef} section id="loans-section" className={[s.wrapper, className].join(" ")}>
            <div className={s.loansSection}>
                <div className={s.loansHeader}>
                    <p className={[noto.className, s.loansTitle].join(" ")}>Pawn Loans or Sell</p>
                    <p className={[noto.className, s.loansSubtitle].join(" ")}>How It Works</p>
                </div>
            </div>
            <div className={s.stepsSection}>
                <div className={s.loansCard}>
                    <div className={s.imageWrapper}>
                        <div className={s.textOverlay}>
                            <h4 className={s.stepTitle}>Step one</h4>
                            <p className={s.stepDescription}>Contact us</p>
                        </div>
                        <Image src={stepOne} alt="step one" className={s.imageStep}/>
                    </div>
                    <p>Submit a Quote | Write to Us | Visit Us</p>
                </div>

                <div className={s.loansCard}>
                    <div className={s.imageWrapper}>
                        <div className={s.textOverlay}>
                            <h4 className={s.stepTitleWhite}>Step Two</h4>
                            <p className={s.stepDescriptionWhite}>Expert evaluation</p>
                        </div>
                        <Image src={stepTwo} alt="step two" className={s.imageStep}/>
                    </div>
                    <p>Get a quote online by filling out our form and uploading
                        a few photos, or visit one of our 2 locations for an
                        in-person appraisal. Our experts will evaluate your items,
                        discuss possible options, and offer you the
                        choice to pawn or sell them.</p>
                </div>

                <div className={s.loansCard}>
                    <div className={s.imageWrapper}>

                        <div className={s.textOverlay}>
                            <h4 className={s.stepTitleWhite}>Step Three</h4>
                            <p className={s.stepDescriptionWhite}>PAYMENT</p>
                        </div>
                        <Image src={stepThree} alt="step three" className={s.imageStep}/>
                    </div>
                    <p>Once we agree on the pawn terms, you
                        receive cash immediately</p>
                </div>
            </div>
            <Image src={jewelryHand} alt="hand" className={s.jewelryHand}/>
            <Button onClick={handlePopup} className={s.button}>Request a Quote</Button>
        </Container>
    );
};

export default StepsSection;
