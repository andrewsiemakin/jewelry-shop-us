import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, description } = await req.json();

        if (!name || !email || !phone || !description) {
            return NextResponse.json(
                { error: "Missing required fields" },
                {
                    status: 400,
                },
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GOOGLE_EMAIL,
                pass: process.env.GOOGLE_APP_KEY,
            },
        });

        let htmlContent = `
            <h1>New Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Description:</strong> ${description}</p>
        `;

        let mailOptions = {
            from: '"Auto-Message" <vladwwe24@gmail.com>',
            to: process.env.GOOGLE_EMAIL,
            subject: "NEW - CONTACT REQUEST",
            html: htmlContent
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: "Email sent successfully" },
            {
                status: 200,
            },
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            {
                status: 500,
            },
        );
    }
}