"use server";

export const validate = async (gRecaptchaToken) => {
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    let res;

    const formData = `secret=${secret}&response=${gRecaptchaToken}`;

    try {
        res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData)
        })
    } catch (e) {
        return {success: false};
    }

    const data = await res.json();

    if(data?.success && data?.score >= 0.5){
        return data;
    } else {
        return {success: false};
    }
}