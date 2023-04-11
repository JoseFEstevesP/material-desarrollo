import nodemailer from 'nodemailer';
const createTransport = () => {
  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '952cf622b15a9d',
      pass: 'b41d32130b2e16',
    },
  });
  return transport;
};
export const sendMail = async () => {
  const transporter = createTransport();
  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>sin la variable</b>', // html body
  });
};
