import { request, response } from "express";
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token base
export const requireSignIn = async (request, response, next) => {
    try {
        const decode = JWT.verify(
            request.headers.authorization,
            process.env.JWT_SECRET
        );
        request.user = decode;
        next();
    } catch (error) {
        console.log(error)
    }
}

//admin access
export const isAdmin = async (request, response, next) => {
    try {
        const user = await userModel.findById(request.user._id);
        if (user.role !== 1) {
            return response.status(401).send({
                success: false,
                message: 'Unauthorized Access',
            })
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error);
        response.status(401).send({
            success: false,
            error,
            message: 'Error in admin middle ware'
        })
    }
}
