import httpServer from './config/http.js';
import { sendMail } from './email.js';
const bootstrap = () => {
  try {
    httpServer.listen(5000, () => {
      console.log('server en el puerto 5000');
    });
  } catch (err) {
    console.error(`connection fails ${err}`);
  }
};
bootstrap();
sendMail();
