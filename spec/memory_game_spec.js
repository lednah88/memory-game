const jsdom = require("jsdom");
const { JSDOM } = jsdom;
describe("index.html", () => {
  var browser;
  beforeEach(() => {
    JSDOM.fromFile("../src/index.html", {

    }).then((res) => {
      browser = res;
      done();
    });
  });
  afterEach(() => {
    browser.window.close();
  });
  it("should have a h1 elemet", () => {
    var h1 = browser.window.document.querySelector("h1");
    expect(h1).not.toBeNull();
  });
  it("should have a div elemet", () => {
    var div = browser.window.document.querySelector("div");
    expect(div).not.toBeNull();
  });
  it("should have a script elemet", () => {
    var script = browser.window.document.querySelector("script");
    expect(script).not.toBeNull();
  });
  it("should have an array of numbers",()=>{
    JSDOM.fromFile("../src/memory_game.js")
    expect(numbers).toBeDefined()
  })
});
