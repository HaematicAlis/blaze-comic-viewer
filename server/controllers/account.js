import mongoose from 'mongoose';
import User from '../models/user.js';

export const register = async (req, res) => {
    const registerInfo = req.body;

    const newUser = new User(registerInfo);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const loginInfo = req.body;

    try {
        const login = await User.find({ username: loginInfo.username, password: loginInfo.password });
        if (login.length > 0) {
            res.status(200).json(login[0]);
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}