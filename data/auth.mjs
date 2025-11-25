import MongoDB from "mongodb";
import { getUsers } from "../db/database.mjs";

const ObjectID = MongoDB.ObjectId;

// 회원가입
export async function signup(user) {
  return getUsers()
    .insertOne(user)
    .then((result) => result.insertedId.toString());
}

// 회원 체크
export async function findByUserid(userid) {
  return getUsers().find({ userid }).next().then(mapOptionalUser);
}

// ID로 회원 찾기
export async function findById(id) {
  return getUsers()
    .find({ _id: new ObjectID(id) })
    .next()
    .then(mapOptionalUser);
}

// Optional<User>를 User | null로 매핑하는 함수
function mapOptionalUser(user) {
  return user ? { ...user, id: user._id.toString() } : user;
}
