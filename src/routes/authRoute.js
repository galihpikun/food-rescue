import express from 'express';
import { login, register, getProfile, logout } from '../controllers/authController.js';
import { jwtMiddleware } from '../middlewares/authMiddleware.js';

const routeAuth = express.Router();

routeAuth.post('/register', register);
routeAuth.post('/login', login);
routeAuth.get('/profile', jwtMiddleware, getProfile);
routeAuth.post('/logout', jwtMiddleware, logout);

export default routeAuth;