import { Request, Response } from "express";
import meetModel from "../models/meetModel";
import { successResponse,errorResponse } from "../utils/response.interceptor";

export const allMeets = async (req: Request, res: Response) => {
    try {
     let meets=await meetModel.find();
     successResponse(res, 200, 'Data Found', meets);
    }
    catch (err) {
        errorResponse(res, 500, 'Server error', err);
    }
}

export const createMeet = async (req: Request, res: Response) => {
    try {
        let data = req.body;
        let newMeet = new meetModel({
            username: data.username,
            link: data.link,
            password: data.password,
            meetDate:data.meetDate
        })
        newMeet = await newMeet.save();
        successResponse(res, 200, 'Meets are Added successfully', newMeet);

    }
    catch (err) {
        errorResponse(res, 500, 'There was an error to add Role', err);
    }
}