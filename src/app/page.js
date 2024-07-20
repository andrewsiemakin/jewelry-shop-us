import s from "./page.module.scss";

import MainProvider from "@/app/MainContext";

import Header from "@/components/blocks/Header";
import WhySection from "@/components/blocks/WhySection";
import AboutUsSection from "@/components/blocks/AboutUsSection";
import Form from "@/components/Form";

import LoansSection from "@/components/LoansSection";
import MapsSection from "@/components/MapsSection";
import StepsSection from "@/components/StepsSection";
import ReviewBlock from "@/components/ReviewBlock";
import PhoneImage from "@/components/PhoneImage";

export default function Home() {
    return (
        <MainProvider>
            <Header/>
            <PhoneImage/>
            <WhySection/>
            <AboutUsSection className={s.hidden}/>
            <StepsSection className={s.hidden}/>
            <LoansSection className={s.hidden}/>
            <ReviewBlock className={s.hidden}/>
            <MapsSection className={s.hidden}/>
            <Form className={s.hidden}/>
        </MainProvider>
    );
}
