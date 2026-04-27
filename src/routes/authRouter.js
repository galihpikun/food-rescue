import express from 'express';
import { register } from '../controller/authController.js';

const routeAuth = express.Router();

routeAuth.post('/register', register);

export default routeAuth;