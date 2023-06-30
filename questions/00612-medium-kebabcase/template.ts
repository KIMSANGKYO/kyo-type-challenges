// 케이스 2,8 번 통과
// type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
//   ? `${First extends Uppercase<First>
//       ? "-"
//       : ""}${Lowercase<First>}${KebabCase<Rest>}`
//   : ""
// 케이스 2,8 번 통과

// 참고  all pass
type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S

// Uncapitalize => 전부 소문자로 타입변경
