"use client";

import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

const GoogleRecaptchaWrapper =  ({children}) => {
    const publicKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

    return (
        <GoogleReCaptchaProvider reCaptchaKey={publicKey ?? "NOT DEFINED"}>
            {children}
        </GoogleReCaptchaProvider>
    )
}

export default GoogleRecaptchaWrapper