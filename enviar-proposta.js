import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Bloqueia qualquer método que não seja POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido." });
  }

  const { nome, email, tema, mensagem } = req.body;

  if (!nome || !email || !tema || !mensagem) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"GD Tecnologia" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Confirmação de Solicitação de Proposta: ${tema}`,
      text: `Olá ${nome},\n\nRecebemos sua solicitação sobre o tema: "${tema}".\n\nNossa equipe analisará os detalhes e o departamento Sentinela (sentinela@grpgd.com.br) entrará em contato em breve com a sua proposta.\n\nAtenciosamente,\nGD Tecnologia`,
      html: `
        <h2>Olá, ${nome}!</h2>
        <p>Recebemos sua solicitação de proposta com sucesso.</p>
        <p><strong>Tema de interesse:</strong> ${tema}</p>
        <hr/>
        <p>Nossa equipe analisará os detalhes enviados e entrará em contato em breve através do e-mail <strong>sentinela@grpgd.com.br</strong>.</p>
        <br/>
        <p>Atenciosamente,<br/><strong>Equipe GD Tecnologia</strong></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro no envio:", error);
    return res.status(500).json({ error: "Erro interno ao enviar e-mail." });
  }
}
