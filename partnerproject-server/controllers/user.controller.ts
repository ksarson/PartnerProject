import { Request, Response } from 'express';
import User from '../models/user.model';

const UserController = {
    createUser: async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;
            const user = await User.create({ name, email, password });
            res.json({ user });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getUser: async (req: Request, res: Response) => {
        try {
            const users = await User.find();
            res.json({ users });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updatedUser = await User.findByIdAndUpdate(
                id,
                { name, email, password },
                { new: true },
            );
            res.json({ user: updatedUser });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await User.findByIdAndDelete(id);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};

export default UserController;
