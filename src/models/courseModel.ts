import mongoose, { Document, Schema } from "mongoose";
import { ICourse } from "../interfaces/courseInterface";

export interface ICourseModel extends ICourse, Document { }

const CourseSchema: Schema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    value: { type: String, required: true },
    about: { type: String, required: true },
    participationCertification: { type: String, required: true },
    trainingCompletioncertification: { type: String, required: true },
    internshipCompletioncertification: { type: String, required: true },
    startDate: {
      type: Date,
      required: true
    },
    instructorName: {
      type: String,
      required: true
    },
    curriculum: [{
      category: { type: String, required: true },
      topics: [{ type: String, required: true }]
    }],
    enrollBy: {
      type: Date,
      required: true

    }
  },
  { timestamps: true }
);

//EXPORT
export default mongoose.model<ICourseModel>("Course", CourseSchema);
