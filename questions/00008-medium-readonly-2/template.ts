type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>
// 테케 1번만 통과
