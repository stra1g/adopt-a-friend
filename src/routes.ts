import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import UserController from './controllers/UserController'

const router = Router();
const upload = multer(uploadConfig);

// upload.array('images') as middleware
router.post('/account/create', UserController.create);

export default router;
