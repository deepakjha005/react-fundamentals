import { Sum } from "../components/Sum";

test("sum method calculate exact sum", () => {
  const result = Sum(3, 5);
  expect(result).toBe(8);
});
