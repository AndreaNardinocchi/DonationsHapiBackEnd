// import { Schema, model } from "mongoose";
// import { Candidate } from "../../types/donation-types";
// const candidateSchema = new Schema<Candidate>({
//   firstName: String,
//   lastName: String,
//   office: String,
// });
// export const CandidateMongoose = model("Candidate", candidateSchema);
import { Schema, model } from "mongoose";
const candidateSchema = new Schema({
    firstName: String,
    lastName: String,
    office: String,
});
export const CandidateMongoose = model("Candidate", candidateSchema);
