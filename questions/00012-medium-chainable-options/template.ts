// 테케 1,2 통과 3 미통과
// type Chainable<T = {}> = {
//   option<K extends string, V>(key: K, value: V): Chainable<T & { [P in K]: V }>
//   get(): T
// }
// 테케 1,2 통과 3 미통과

// Omit , Record 활용 재귀 > 테케통과
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>
  get: () => T
}
