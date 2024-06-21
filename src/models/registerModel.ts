import mongoose, { Document, Schema } from "mongoose";
import { IRegister } from "../interfaces/registerInterface";

//EXPORT INTERFACE WITH MONGOOSE DOCUMENT
export interface IRegisterModel extends IRegister, Document { }

//DEFINE USER SCHEMA
const RegisterSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        collegeName: {
            type: String,
            required: true,
        },
        degreeYear: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        domainOfInterest: {
            type: String,
        },
        contactNumber: {
            type: String,
            required: true,
        },
        whatsAppNumber: {
            type: String,
        },
        modeOfCommunications: {
            type: String,
            required: true,
        },
        type:{
            type:String,
            required:true
        }
    },
    { timestamps: true }
);

//EXPORT
export default mongoose.model<IRegisterModel>("Register", RegisterSchema);