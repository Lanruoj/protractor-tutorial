const homepage = require("../pages/homepage");
describe("Demo calculator tests", () => {
  it("Adds 1 plus 4 to return 5", () => {
    homepage.get("http://juliemr.github.io/protractor-demo/");
    homepage.enterFirstNumber("1");
    homepage.enterSecondNumber("4");
    homepage.clickGo();
    homepage.verifyResult("5");
  });
  it("Adds 1 plus 4 to return 5", () => {
    homepage.get("http://juliemr.github.io/protractor-demo/");
    homepage.enterFirstNumber("1");
    homepage.enterSecondNumber("4");
    homepage.clickGo1();
    homepage.verifyResult("5");
  });
});
