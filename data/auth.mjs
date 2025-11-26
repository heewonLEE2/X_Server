import MongoDB from "mongodb";
import { useVirtualId } from "../db/database.mjs";
import mongoose from "mongoose";

// versionKey: Mongoose가 문서를 저장할 때 자동으로 추가하는 __v 필드를 설정
const userSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    url: String,
  },
  { versionKey: false }
);

useVirtualId(userSchema);
const User = mongoose.model("User", userSchema);

// 회원가입
export async function signup(user) {
  return new User(user).save().then((data) => data.id);
}

// 회원 체크
export async function findByUserid(userid) {
  return User.findOne({ userid });
}

// ID로 회원 찾기
export async function findById(id) {
  return User.findById(id);
}
