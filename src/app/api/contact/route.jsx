import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();
  console.log(email)
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
      to: process.env.gmail_user,
      name: name,
      text: message,
      replyTo: email,
      subject: `Message from ${name} (${email})`
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
