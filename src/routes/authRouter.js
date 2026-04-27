import express from 'express';
import { login, register } from '../controller/authController.js';

const routeAuth = express.Router();

routeAuth.post('/register', register);
routeAuth.post('/login', login);

export default routeAuth;