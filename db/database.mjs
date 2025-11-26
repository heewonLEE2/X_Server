import { config } from "../config.mjs";
import Mongoose from "mongoose";

export async function connectDB() {
  return Mongoose.connect(config.db.host, {
    dbName: "aidetect",
  });
}

// 스키마에 기능을 추가
// _id 값을 문자열로 변환한 id 가상 필드 추가
// JSON 또는 객체 변환 시(응답 보낼 때) virtual 필드 포함시키기 설정
export function useVirtualId(schema) {
  schema.virtual("id").get(function () {
    return this._id.toString();
  });
  schema.set("toJSON", { virtuals: true });
  schema.set("toObject", { virtuals: true });
}
