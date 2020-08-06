const{startGame, flipper, shuffle, flipCard} =require("../src/memory_game")
const jsdom = require("jsdom");
function memoryGame() {
  document.getElementById("board").innerHTML = "Memory Game";
}

describe("html", function() {
  beforeEach(function() {
    const dom = new jsdom.JSDOM('<html><body id="board">Start New Game</body></html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
	})
  it("should update dom", function() {
    expect(global.document.getElementById("board").innerHTML).toBe('Start New Game');
    memoryGame();
    expect(global.document.getElementById("board").innerHTML).toBe("Memory Game");
  });
  it("should be able to start a game",function(){
    expect(startGame()).not.toBeNull()
  }) 
  it("should be able to flipCard a game",function(){
    expect(flipCard()).not.toBeNull()
  })
})