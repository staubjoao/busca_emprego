const nodemailer = require('nodemailer');

const sendNotification = async (emailDestino, assunto, mensagem) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: "rh.buscaEmprego@gmail.com",
        pass: "taqyqlxxddoutavd"
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Endereço de e-mail do remetente
    to: emailDestino,            // Destinatário
    subject: assunto,            // Assunto do e-mail
    text: mensagem,              // Mensagem do e-mail
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`E-mail enviado para ${emailDestino}`);
  } catch (error) {
    console.error(`Erro ao enviar e-mail: ${error}`);
  }
};

module.exports = sendNotification;
