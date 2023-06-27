type Trim<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${" " | "\n" | "\t"}`
  ? Trim<L>
  : S
