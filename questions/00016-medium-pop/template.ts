// 테케 3번 미통과
// type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : never

// Expect<Equal<Pop<[]>, []>>
// 테케 3번 미통과

// 통과 코드 복습필요
type Pop<T extends any[]> = T["length"] extends 0
  ? []
  : T extends [...infer Arg, infer L]
  ? Arg
  : never
