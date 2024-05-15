import express from "express"
import User from "../model/userModel.js"
import bcrypt  from "bcryptjs"

export const signUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullName,
            email,
            password: hashPassword 
        });
        const savedUser = await newUser.save();
        res.status(201).json({ message: "User created successfully", user: savedUser });
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const comparePs = await bcrypt.compare(password, user.password);
        if (!comparePs) {
            return res.status(400).json({ message: "Invalid email or password" });
        } else {
            return res.status(200).json({
                message: "Login Successful",
                user: {
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email
                }
            });
        }
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Internal server error" });
    }
}