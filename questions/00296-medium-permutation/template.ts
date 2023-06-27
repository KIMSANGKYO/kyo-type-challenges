// 테케 1,5 통과 2,3,4 미통과
// type Permutation<T, R = T> = [R] extends [never]
//   ? []
//   : T extends infer U | never
//   ? [U, ...Permutation<Exclude<T, U>>]
//   : never
// 테케 1,5 통과 2,3,4 미통과
// 정렬이 문제인거 같은데

// 해설 참고
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never

// T 가 never 면 빈배열
// K 를 포함한 순열 배열 반환 // 이외는 never
