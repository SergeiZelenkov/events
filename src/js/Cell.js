export class Cell {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "cell";
  }

  activate() {
    this.el.classList.add("red");
  }

  deactivate() {
    this.el.classList.remove("red");
  }

  isActive() {
    return this.el.classList.contains("red");
  }
}
