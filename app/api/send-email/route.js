import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the request body (form data)
    const { name, email, mobile, occupancy } = await req.json();

    // Define the admin's email address
    const adminEmail = "atithistaymumbai@gmail.com";

    // Create a transporter using Gmail's SMTP (you can use other services)
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can replace this with Mailgun, SendGrid, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or an app-specific password
      },
    });

    // Define email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email
      to: adminEmail, // Recipient's email (admin)
      subject: "New Form Submission", // Email subject
      html: `
        <h3>New Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Occupancy:</strong> ${occupancy}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    // Handle error and respond with a failure
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
    });
  }
}
