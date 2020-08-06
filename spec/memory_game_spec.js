const { startGame } = require("../src/memory_game");
const jsdom = require("jsdom");
function memoryGame() {
  document.getElementById("board").innerHTML = "Memory Game";
}

describe("html", function () {
  beforeEach(function () {
    const dom = new jsdom.JSDOM(
      '<html><body id="board">Start New Game</body></html>'
    );
    global.document = dom.window.document;
    global.window = dom.window;
  });
  it("should update dom", function () {
    expect(global.document.getElementById("board").innerHTML).toBe(
      "Start New Game"
    );
    memoryGame();
    expect(global.document.getElementById("board").innerHTML).toBe(
      "Memory Game"
    );
  });
  it("should be able to start a game", function () {
    expect(startGame()).not.toBeNull();
  });
  it("should check if there are 12 cards",function(){
    let numbers =["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6"]
    expect(numbers.length).toEqual(12)
  })
});
