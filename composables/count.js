export const useCounter = () =>
  useState("counter", () => Math.round(Math.random() * 100));
