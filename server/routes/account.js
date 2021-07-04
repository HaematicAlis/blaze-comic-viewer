import express from 'express';

import { register, login } from '../controllers/account.js';

const accountRouter = express.Router();

accountRouter.post('/register', register);
accountRouter.post('/login', login);

export default accountRouter;