import jwt from "jsonwebtoken";
import * as authRepository from "../data/auth.mjs";

const AUTH_ERROR = { message: "인증 에러" };

// 인증 미들웨어
export const isAuth = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  console.log(authHeader);

  if (!(authHeader && authHeader.startsWith("Bearer "))) {
    console.log("헤더 에러");
    return res.status(401).json(AUTH_ERROR);
  }

  // Bearer 토큰 분리
  const token = authHeader.split(" ")[1];
  console.log("토큰 분리 성공!!", token);

  next();
};
