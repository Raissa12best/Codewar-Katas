function calculator(a, b, sign) {
  if (typeof a !== "number" || typeof b !== "number") return "unknown value";

  if (sign === "+") return a + b;
  if (sign === "-") return a - b;
  if (sign === "*") return a * b;
  if (sign === "/") return a / b;

  return "unknown value";
}