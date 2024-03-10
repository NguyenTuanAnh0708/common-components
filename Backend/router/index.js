import express from 'express';
const router = express.Router();
import controller from '../controller/index.js';

router.get('/', controller.getTestData);

export default router;
