// 테케 2 번 통과 //
// type DeepReadonly<T> = {
//     readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
//   }

// 테케 2 번 통과 //

// recommend // 테케 1번통과
// type DeepReadonly<T> = keyof T extends never
//   ? T
//   : { readonly [K in keyof T]: DeepReadonly<T[K]> }
// recommend // 테케 1번통과

// 위 둘 병합 작성했지만 1번만 통과
type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
    }
