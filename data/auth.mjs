import { db } from "../db/database.mjs";

// 회원가입
export async function signup(user) {
  const { userid, password, name, email, url } = user;
  return db
    .execute(
      "INSERT INTO users (userid, password, name, email, url) VALUES (?, ?, ?, ?, ?)",
      [userid, password, name, email, url]
    )
    .then((result) => result[0].insertId);
}

// 로그인
export async function login(userid, password) {
  return users.find(
    (user) => user.userid === userid && user.password === password
  );
}

// 회원 체크
export async function findByUserid(userid) {
  return db
    .execute("select idx, password from users where userid = ?", [userid])
    .then((result) => {
      // console.log(result); // [ [ { idx: 1 } ]
      return result[0][0];
    });
}

// ID로 회원 찾기
export async function findById(idx) {
  return db
    .execute("select idx, userid from users where idx = ?", [idx])
    .then((result) => result[0][0]);
}
