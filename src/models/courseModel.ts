import mongoose, { Document, Schema } from "mongoose";
import { ICourse } from "../interfaces/courseInterface";

export interface ICourseModel extends ICourse, Document { }

const CourseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    courseimage: {
      type: String,
      required: true
    },
    videos: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    enrollby: {
      type: Date,
      required: true
    },
    seats: {
      type: Number,
      required: true
    },
    BookingSeats: {
      type: Number,
      required: true
    },
    courseName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    aboutProgram: {
      type: String
    },
    programCurriculum: {
      type: Array
    }

  },
  { timestamps: true }
);

//EXPORT
export default mongoose.model<ICourseModel>("Course", CourseSchema);