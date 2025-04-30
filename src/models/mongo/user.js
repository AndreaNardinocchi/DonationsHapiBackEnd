// import { Schema, model } from "mongoose";
// import { User } from "../../types/donation-types";
// const userSchema = new Schema<User>({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String,
// });
// export const UserMongoose = model("User", userSchema);
import { Schema, model } from "mongoose";
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
export const UserMongoose = model("User", userSchema);
