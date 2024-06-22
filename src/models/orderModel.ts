import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "../interfaces/userInterface";

//EXPORT INTERFACE WITH MONGOOSE DOCUMENT
export interface IUserModel extends IUser, Document {}

//DEFINE USER SCHEMA
const OrderSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone:{
      type:String,
      required:true
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    },
    profileUrl:{
      type: String,
      default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  },
  },
  { timestamps: true }
);

//EXPORT
export default mongoose.model<IUserModel>("Order", OrderSchema);