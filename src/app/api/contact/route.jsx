import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.gmail_user,
        pass: process.env.gmail_pass,
      },
    });

    await transporter.sendMail({
      from: email,
      to: "yuusuf9876@gmail.com",
      name: name,
      text: message,
    });
   return Response.json(
    {succes:true, message:'Email sent successfully'},
    {status:200}
  )
   
  } catch (error) {
    return Response.json(
      {succes:false, message:'Failed to send email'},
      {status:500}
    )
  }
}
