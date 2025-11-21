import * as authRepository from "../data/auth.mjs";

export async function signup(req, res, next) {
  const { userid, password, name, email } = req.body;
  const user = await authRepository.signup(userid, password, name, email);

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(500).json({ message: "에러발생" });
  }
}

export async function login(req, res, next) {
  const { userid, password } = req.body;
  const user = await authRepository.login(userid, password);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: "아이디 또는 비밀번호가 틀렸습니다.!" });
  }
}
