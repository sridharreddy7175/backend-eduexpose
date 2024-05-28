import mongoose, { Document, Schema } from "mongoose";
import { IMeet } from "../interfaces/meetInterface";

export interface IMeetModel extends IMeet, Document { }

const MeetSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true
        },
        meetDate:{
            type:Date,
            required:true
        }

    },
    { timestamps: true }
);

//EXPORT
export default mongoose.model<IMeetModel>("Meet", MeetSchema);