import mongoose, { Document, Schema } from "mongoose";
import { IRole } from "../interfaces/roleinterface";

export interface IRoleModel extends IRole, Document {}

const RoleSchema: Schema = new Schema(
  {
    roleName: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      default:true
    }
  },
  { timestamps: true }
);

//EXPORT
export default mongoose.model<IRoleModel>("Role", RoleSchema);