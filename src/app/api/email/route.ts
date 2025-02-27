// src/app/api/email/route.ts

import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, noHp, alamat } = await request.json();

    // validation input
    if (!name || !email || !noHp || !alamat) {
      return new Response(
        JSON.stringify({ error: "Semua field harus diisi" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Konfigurasi transporter Nodemailer
    const transporter = nodemailer.createTransport({
      // add smtp transport
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Konfigurasi email
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Pesan Baru dari Formulir Kontak",
      text: `
        Anda mendapatkan pesan baru dari formulir kontak:
        Nama: ${name}
        Email: ${email}
        No Handphone: ${noHp}
        Alamat: ${alamat}
      `,
      html: `
        <h3>Pesan Baru dari Formulir Kontak</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No Handphone:</strong> ${noHp}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
      `,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    // Kirim respons sukses
    return new Response(
      JSON.stringify({ message: "Email berhasil dikirim!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Gagal mengirim email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
