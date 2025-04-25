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

class UI {
  constructor() {
    this.playField = document.createElement("div");
    this.playField.className = "field";

    this.result = document.createElement("div");
    this.result.className = "result";

    this.player = document.createElement("p");
    this.goblin = document.createElement("p");

    this.player.textContent = "0";
    this.goblin.textContent = "0";

    this.result.append(this.player, this.goblin);
    document.body.append(this.playField, this.result);
  }

  updatePlayerScore(value) {
    this.player.textContent = value;
  }

  updateGoblinMissed(value) {
    this.goblin.textContent = value;
  }

  getPlayerScore() {
    return parseInt(this.player.textContent);
  }

  getGoblinMissed() {
    return parseInt(this.goblin.textContent);
  }
}

class Game {
  constructor() {
    this.ui = new UI();
    this.cells = [];
    this.activeIndex = -1;
    this.score = 0;
    this.missed = 0;

    for (let i = 0; i < 16; i++) {
      const cell = new Cell();
      this.cells.push(cell);
      this.ui.playField.append(cell.el);

      cell.el.addEventListener("click", () => {
        if (cell.isActive()) {
          cell.deactivate();
          this.score++;
          this.ui.updatePlayerScore(this.score);
        }
      });
    }

    this.start();
  }

  start() {
    this.timer = setInterval(() => {
      this.cells.forEach(cell => cell.deactivate());

      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.cells.length);
      } while (newIndex === this.activeIndex);

      this.cells[newIndex].activate();
      this.activeIndex = newIndex;

      this.missed++;
      this.ui.updateGoblinMissed(this.missed);

      if (this.missed >= this.score + 5) {
        alert("Verloren!");
        this.reset();
      }
    }, 1000);
  }

  reset() {
    clearInterval(this.timer);
    this.score = 0;
    this.missed = 0;
    this.ui.updatePlayerScore(0);
    this.ui.updateGoblinMissed(0);
    this.cells.forEach(cell => cell.deactivate());
    this.start();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Game();
});


