import { Request, Response } from "express";
import registerModel from "../models/registerModel";
import roleModel from "../models/roleModel";
import userModel from "../models/userModel";
import { errorResponse, successResponse } from "../utils/response.interceptor";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
    try {
        let userData: any = req.body;
        let userCredentials = await userModel.findOne({ email: userData.email });
        if (userCredentials) {
            return errorResponse(res, 400, "User already exists");
        }

        let roleData = await roleModel.findOne({ roleName: userData.role });
        if (!roleData) {
            return errorResponse(res, 400, "User Role does not exist");
        }

        let salt = await bcrypt.genSalt(10);
        let encryptPassword = await bcrypt.hash(userData.password, salt);

        let newUser = new userModel({
            name: userData.name,
            email: userData.email,
            phone:userData.phone,
            password: encryptPassword,
            role: roleData._id,
        });
        let savedUser = await newUser.save();
        successResponse(res, 200, "User added successfully", savedUser);
    } catch (err) {
        errorResponse(res, 500, "There was an error to add user", err);
    }
};

export const userLogin = async (req: Request, res: Response) => {
    try {
        let { email, password } = req.body;
        
        // Check if email exists
        let user:any = await userModel.findOne({ email: email }).populate('role');;
        if (!user) {
            return errorResponse(res, 400, "Invalid Email id");
        }
        
        // Check if the password is correct
        let isMatch: boolean = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return errorResponse(res, 400, "Invalid Password");
        }
        
        // Create a payload
        let secretKey: string | undefined = process.env.JWT_SECRET_KEY;
        if (secretKey) {
            // Sign the token
            let token = await jwt.sign({ data: user.id }, secretKey, {
                expiresIn: "1h",
            });
            let payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                token:token
            };
            
            // Return token and user info
            return successResponse(res, 200, "Login is Success",  payload );
        } else {
            return errorResponse(res, 400, "Server Error, unable to create a token");
        }
    } catch (err) {
        errorResponse(res, 500, "There was an error during login", err);
    }
}

export const createRegister = async (req: Request, res: Response) => {
    try {
        let userData: any = req.body;
        let newRegister = new registerModel({
            name: userData.name,
            emailAddress: userData.emailAddress,
            collegeName: userData.collegeName,
            degreeYear: userData.degreeYear,
            department: userData.department,
            domainOfInterest: userData.domainOfInterest || '',
            modeOfCommunications:userData.modeOfCommunications,
            contactNumber: userData.contactNumber,
            whatsAppNumber: userData.whatsAppNumber || '',
            type:userData?.type
        });

        let savedRegister = await newRegister.save();
        successResponse(res, 200, "Registration added successfully", savedRegister);
    } catch (err) {
        errorResponse(res, 500, "There was an error to add registration", err);
    }
};

export const allUsers = async (req: Request, res: Response) => {
    try {
        let meets = await userModel.find().populate("role");
        successResponse(res, 200, "Data Found", meets);
    } catch (err) {
        errorResponse(res, 500, "Server error", err);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        let user: any = req.body;
        let userCredentials = await userModel.findOne({ _id: user.userId });

        if (!userCredentials) {
            return errorResponse(res, 400, "User does not exist");
        }
        const query = { _id: user.userId };
        let userData = {
            name: user.name,
            password: user.password,
            profileUrl: req.file ? req.file.originalname : null,
        };
        await userModel.updateOne(query, userData);
        successResponse(res, 200, "User profile updated successfully", "");
    } catch (err) {
        errorResponse(res, 500, "There was an error to update user", err);
    }
};


export const userInfo = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;

        if (!userId) {
            return errorResponse(res, 400, "User ID is required");
        }

        const userData = await userModel.findById(userId).select('-password');;

        if (!userData) {
            return errorResponse(res, 404, "User not found");
        }

        successResponse(res, 200, "User data retrieved successfully", userData);
    } catch (err) {
        errorResponse(res, 500, "There was an error to add registration", err);
    }
};

