import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
  // req 객체에 저장된 검증 에러들을 가져옴
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // 에러 없음 → 다음 미들웨어(컨트롤러)로 이동
    return next();
  }
  // 에러 있음 → 첫 번째 에러의 메시지를 응답
  return res.status(400).json({ message: errors.array()[0].msg });
  // errors.array()[0].msg = "최소 4자이상 입력"
};

// 검증 실패 시 errors 객체 내용:
// errors = {
//   isEmpty: () => false,
//   array: () => [
//     {
//       type: 'field',
//       value: '안녕',
//       msg: '최소 4자이상 입력',  // ← withMessage()로 설정한 값
//       path: 'text',
//       location: 'body'
//     }
//   ]
// }
