import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));

app.use(cors());

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
