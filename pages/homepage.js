const homepage = function() {
    const firstInput = element(by.model("first"))
    const secondInput = element(by.model("second"))
    const goButton = element(by.css("[ng-click='doAddition()']"))
    this.get = (url) => {
        browser.get(url)
    }
    this.enterFirstNumber = (firstNumber) => {
        firstInput.sendKeys(firstNumber)
    }
    this.enterSecondNumber = (secondNumber) => {
        secondInput.sendKeys(secondNumber)
    }
    this.clickGo = () => {
        goButton.click()
    }
    this.verifyResult = (result) => {
        let output = element(by.cssContainingText(".ng-binding", result))
        expect(output.getText()).toEqual("5")
    }
}

module.exports = new homepage()