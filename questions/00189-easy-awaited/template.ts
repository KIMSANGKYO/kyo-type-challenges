type MyAwaited<T> = T extends Promise<any>
  ? MyAwaited<T extends Promise<infer U> ? U : T>
  : T extends { then: (onfulfilled: (arg: infer U) => any) => any }
  ? U
  : T
