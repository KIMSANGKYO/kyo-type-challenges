type LengthOfString<
  S extends string,
  T extends any[] = []
> = S extends `${infer _}${infer Rest}`
  ? LengthOfString<Rest, [...T, any]>
  : T["length"]
