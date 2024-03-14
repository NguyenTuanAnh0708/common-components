import express from 'express';
const router = express.Router();
import controller from '../controller/index.js';

router.get('/', controller.getTestData);
router.post('/post', controller.recaptcha)

export default router;
