import roleModel from "../models/roleModel";
import { Request, Response } from "express";
import { successResponse, errorResponse } from "../utils/response.interceptor";
import userModel from "../models/userModel";
import mongoose from "mongoose";


export const allRoles = async (req: Request, res: Response) => {
    try {
        let meets = await roleModel.find();
        successResponse(res, 200, 'Data Found', meets);
    }
    catch (err) {
        errorResponse(res, 500, 'Server error', err);
    }
}

export const createRole = async (req: Request, res: Response) => {
    try {
        let roleData = req.body;
        let newRole = new roleModel({
            roleName: roleData.roleName,
            displayName: roleData.roleName || '',
            description: roleData.description || ''
        })
        newRole = await newRole.save();
        successResponse(res, 200, 'Roles are Added successfully', newRole);
    }
    catch (err) {
        errorResponse(res, 500, 'There was an error to add Role', err);
    }

}

export const updateUserRole = async (req: Request, res: Response) => {
    try {
        let roleData = req.body;
        let userId = roleData?.userId;

        let role = await roleModel.findOne({
            _id: userId,
        });
        if (!role) {
            return errorResponse(res, 404, 'User not found');
        }

        const query = { _id: userId };
        let userData = { role: role._id };

        await userModel.updateOne(query, userData)
            .then(() => {
                successResponse(res, 200, 'User role updated successfully', '');
            })
            .catch((err) => {
                errorResponse(res, 400, 'Database operation failed', err);
            });
    } catch (err) {
        errorResponse(res, 500, 'There was an error updating the user role', err);
    }
}
