import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Extract<Fruit, "apple" | "banana">;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
