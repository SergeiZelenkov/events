export class UI {
  constructor() {
    this.playField = document.createElement("div");
    this.playField.className = "field";

    this.result = document.createElement("div");
    this.result.className = "result";

    this.player = document.createElement("p");
    this.goblin = document.createElement("p");
    this.player.textContent = `Player 0`;
    this.goblin.textContent = `Goblin 0`;
    this.result.append(this.player, this.goblin);
    document.body.append(this.playField, this.result);
  }

  updatePlayerScore(value) {
    this.player.textContent = `Player ${value}`;
  }

  updateGoblinMissed(value) {
    this.goblin.textContent = `Goblin ${value}`;
  }
}
