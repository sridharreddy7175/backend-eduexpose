import mongoose, { Document, Schema } from "mongoose";
import { ICurriculum } from "../interfaces/curriculumInterface";

export interface ICurriculumModel extends ICurriculum, Document { }

const curriculumSchema: Schema = new Schema(
    {
        category: { type: String, required: true },
        topics: [{ type: String, required: true }],
    },
    { timestamps: true }
);

//EXPORT
export default mongoose.model<ICurriculum>("Curriculum", curriculumSchema);

