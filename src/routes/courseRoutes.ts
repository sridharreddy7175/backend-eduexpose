import { Router } from "express";
import { validateBodyPayload } from "../vaildation/validator";
import { createCourseSchema,  } from "../vaildation/schema";
import { allCourses, createCourse } from "../controllers/courseController";
import multer from "multer";

const courseRoutes = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

courseRoutes.get('/allcourses', allCourses);
courseRoutes.post('/createcourse', createCourse);

export default courseRoutes;
