import { Request, Response } from 'express'
import courseModel from "../models/courseModel";
import { errorResponse, successResponse } from "../utils/response.interceptor";
import { ICourse } from '../interfaces/courseInterface';

export const allCourses = async (req: Request, res: Response) => {
    try {
        const courses = await courseModel.find().exec();
     successResponse(res, 200, 'Data Found', courses);
    }
    catch (err) {
        errorResponse(res, 500, 'Server error', err);
    }
}

export const createCourse = async (req: Request, res: Response) => {
    try {
      const courseData: Partial<ICourse> = req.body;
    //   if (!req.file) {
    //     return errorResponse(res, 400, 'Course image is required');
    //   }
   // Convert date strings to Date objects
   const startDate = new Date(courseData.startDate as unknown as string);
   const enrollBy = new Date(courseData.enrollBy as unknown as string);

   // Check if the dates are valid
   if (isNaN(startDate.getTime())) {
     return errorResponse(res, 400, 'Invalid startDate format. Use YYYY-MM-DD.');
   }
   if (isNaN(enrollBy.getTime())) {
     return errorResponse(res, 400, 'Invalid enrollBy format. Use YYYY-MM-DD.');
   }
      
      const newCourse: ICourse = {
        image: courseData.image!,
        title: courseData.title!,
        description: courseData.description!,
        value: courseData.value!,
        about: courseData.about!,
        participationCertification: courseData.participationCertification!,
        trainingCompletioncertification: courseData.trainingCompletioncertification!,
        internshipCompletioncertification: courseData.internshipCompletioncertification!,
        curriculum: courseData.curriculum!,
        startDate: startDate,
        instructorName: courseData.instructorName!,
        enrollBy:enrollBy
      };
  
      const course = new courseModel(newCourse);
      const savedCourse = await course.save();
      return successResponse(res, 200, 'Course added successfully', savedCourse);
    } catch (err) {
      return errorResponse(res, 500, 'There was an error adding the course', err);
    }
  };