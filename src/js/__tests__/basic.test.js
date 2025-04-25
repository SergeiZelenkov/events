const { Cell } = require("../app");

describe("Cell", () => {
  let cell;

  beforeEach(() => {
    cell = new Cell();
  });

  test("should be inactive by default", () => {
    expect(cell.isActive()).toBe(false);
  });

  test("should activate correctly", () => {
    cell.activate();
    expect(cell.isActive()).toBe(true);
  });

  test("should deactivate correctly", () => {
    cell.activate();
    cell.deactivate();
    expect(cell.isActive()).toBe(false);
  });
});
