import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido." });
  }

  const { nome, email, telefone, mensagem } = req.body;

  if (!nome || !email || !telefone || !mensagem) {
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
      subject: `Confirmação de Solicitação de Proposta`,
      text: `Olá ${nome},\n\nRecebemos sua solicitação com sucesso.\n\nDetalhes do que precisará ser feito:\n${mensagem}\n\nNossa equipe analisará os detalhes e o departamento Sentinela (sentinela@grpgd.com.br) entrará em contato em breve com a sua proposta.\n\nAtenciosamente,\nGD Tecnologia`,
      html: `
        <h2>Olá, ${nome}!</h2>
        <p>Recebemos sua solicitação de proposta com sucesso.</p>
        <p><strong>Detalhes do que precisará ser feito:</strong></p>
        <blockquote style="border-left: 4px solid #f97316; margin-left: 0; padding-left: 16px; color: #555;">
          <p>${mensagem.replace(/\n/g, "<br>")}</p>
        </blockquote>
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
