import express from 'express'; //MODULO
import cors from 'cors'; //MODULO CORS
import routes from './routes'; //./ LOCAL
import path from 'path';
const app = express();
app.use(cors());
app.use(express.json()); //Usar Express:JSON
app.use(routes); //Usar Routes
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);