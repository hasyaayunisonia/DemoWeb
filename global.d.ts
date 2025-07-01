// global.d.ts
import "@testing-library/jest-dom";

// Ini memperluas expect dari jest agar tahu matchers dari jest-dom
declare global {
  namespace jest {
    interface Matchers<R>
      extends import("@testing-library/jest-dom/matchers").Matchers<R> {}
  }
}
