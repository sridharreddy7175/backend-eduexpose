import mongoose, { Document, Schema } from "mongoose";
import { ICategory } from "../interfaces/categoryInterface";

export interface ICategoryModel extends ICategory, Document { }

const CategorySchema: Schema = new Schema(
    {
        courseName: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

//EXPORT
export default mongoose.model<ICategory>("Category", CategorySchema);