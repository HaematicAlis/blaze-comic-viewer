import User from '../models/user.js';

export const register = async (req, res) => {
    const registerInfo = req.body;

    const newUser = new User(registerInfo);

    try {
        const existingUser = await User.find({ username: newUser.username });
        const existingEmail = await User.find({ email: newUser.email });
        if (existingUser.length > 0) {
            res.status(409).json({ message: "Username already exists" });
        } else if (existingEmail.length > 0) {
            res.status(409).json({ message: "Email is already is use" });
        } else {
            await newUser.save();
            res.status(201).json(newUser);
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const loginInfo = req.body;

    try {
        const login = await User.find({ username: loginInfo.username, password: loginInfo.password });
        if (login.length > 0) {
            res.status(200).json({ id: login[0]._id, username: login[0].username, message: `Logged in as ${login[0].username}` });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}