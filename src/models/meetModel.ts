import mongoose, { Document, Schema } from "mongoose";
import { IMeet } from "../interfaces/meetInterface";

export interface IMeetModel extends IMeet, Document { }

const MeetSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true
        },
        meetDate:{
            type:String,
            required:true
        }

    },
    { timestamps: true }
);

//EXPORT
export default mongoose.model<IMeetModel>("Meet", MeetSchema);