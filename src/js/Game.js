import { Cell } from "./Cell.js";
import { UI } from "./UI.js";

export class Game {
  constructor() {
    this.ui = new UI();
    this.cells = [];
    this.activeIndex = -1;
    this.score = 0;
    this.missed = 0;
    this.wasClicked = false;
    this.maximumMisses = 5;

    for (let i = 0; i < 16; i++) {
      const cell = new Cell();
      this.cells.push(cell);
      this.ui.playField.append(cell.el);

      cell.el.addEventListener("click", () => {
        if (cell.isActive()) {
          cell.deactivate();
          this.score++;
          this.ui.updatePlayerScore(this.score);
          this.wasClicked = true;
        } else {
          this.missed++;
          this.ui.updateGoblinMissed(this.missed);
          this.wasClicked = true;
        }
        if (this.missed === this.maximumMisses) {
          this.ui.updateGoblinMissed(this.missed);
          setTimeout(() => {
            alert("Verloren!");
            this.reset();
          }, 0);
        }
      });
    }

    this.start();
  }

  start() {
    this.timer = setInterval(() => {
      this.cells.forEach((cell) => cell.deactivate());
      if (!this.wasClicked) {
        this.missed++;
        this.ui.updateGoblinMissed(this.missed);
      }
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.cells.length);
      } while (newIndex === this.activeIndex);

      this.cells[newIndex].activate();
      this.activeIndex = newIndex;
      this.wasClicked = false;
      if (this.missed === this.maximumMisses) {
        this.ui.updateGoblinMissed(this.missed);
        setTimeout(() => {
          alert("Verloren!");
          this.reset();
        }, 0);
      }
    }, 1000);
  }

  reset() {
    clearInterval(this.timer);
    this.score = 0;
    this.missed = 0;
    this.ui.updatePlayerScore(0);
    this.ui.updateGoblinMissed(0);
    this.cells.forEach((cell) => cell.deactivate());
    this.start();
  }
}
