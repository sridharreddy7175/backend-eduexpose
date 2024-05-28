import { Request, Response } from 'express'
import courseModel from "../models/courseModel";
import { errorResponse, successResponse } from "../utils/response.interceptor";

export const allCourses = async (req: Request, res: Response) => {
    try {
     let courses=await courseModel.find();
     successResponse(res, 200, 'Data Found', courses);
    }
    catch (err) {
        errorResponse(res, 500, 'Server error', err);
    }
}

export const createCourse = async (req: any, res: Response) => {
    try {
        let courseData: any = req.body;
        // save to db
        let courses = new courseModel({
            title: courseData.title,
            description: courseData.description,
            author: courseData.author,
            price: courseData.price,
            courseimage: req.file.originalname,
            videos: courseData.videos,
        });
        courses = await courses.save();
        successResponse(res, 200, 'Course are Added successfully', courses);
    }
    catch (err) {
        errorResponse(res, 500, 'There was an error to add Course', err);
    }
}