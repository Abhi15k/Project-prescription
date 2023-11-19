import { request, response } from "express";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import Jwt from "jsonwebtoken";

export const registerController = async (request, response) => {
    try {
        const { name, email, password, phone } = request.body;
        //validation
        if (!name) {
            return response.send({ message: 'Name is Required' })
        }
        if (!email) {
            return response.send({ message: 'email is Required' })
        }
        if (!phone) {
            return response.send({ message: 'phone is Required' })
        }
        if (!password) {
            return response.send({ message: 'password is Required' })
        }

        //check user
        const existingUser = await userModel.findOne({ email })
        //existing user
        if (existingUser) {
            return response.status(200).send({
                success: false,
                message: 'Already Registerd Please login'
            })
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({ name, email, phone, password: hashedPassword }).save();

        response.status(201).send({
            success: true,
            message: 'User Register Successfull',
            user
        })


    } catch (error) {
        console.log(error);
        response.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
};

//loginController
export const loginController = async (request, response) => {
    try {
        const { email, password } = request.body;
        //validation
        if (!email || !password) {
            return response.status(404).send({
                success: false,
                message: 'Invalid Email or Password',
            })
        }
        //check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return response.status(404).send({
                success: false,
                message: 'Email is not registerd',
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return response.status(201).send({
                success: false,
                message: 'Invalid Password',
            })
        }
        //token
        const token = await Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d", });
        response.status(200).send({
            success: true,
            message: 'Login successfull',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            },
            token
        })

    } catch (error) {
        console.log(error);
        response.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        })
    }
};

//testController
export const testController = async (request, response) => {
    response.send('Protected rouets');
}