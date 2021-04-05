import express from 'express';
import routes from './routes';
import path from 'path'

const app = express();

app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(process.env.PORT || 3333, () => console.log('server is running'));
