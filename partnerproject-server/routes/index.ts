import express, { Router } from 'express';
import UserController from '../controllers/user.controller';

const router: Router = express.Router();

// Define a GET endpoint
router.get('/', UserController.getUser);

// Define a POST endpoint
router.post('/', UserController.createUser);

// Define a PUT endpoint
router.put('/:id', UserController.updateUser);

// Define a DELETE endpoint
router.delete('/:id', UserController.deleteUser);

export default router;
