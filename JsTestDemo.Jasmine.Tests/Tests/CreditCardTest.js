/// <chutzpah_reference path="../../JsTestDemo/app/dashboard/creditcard.js" />

describe("Credit Card number", function () {
    it("should return true when valid", function () {
        expect(app.creditCard.isValid("1234567890123452")).toEqual(true);

        expect(app.creditCard.isValid("4627383674323741")).toEqual(true);

        expect(app.creditCard.isValid("7238562784627463")).toEqual(true);
    });

    it("should return false when invalid", function () {
        expect(app.creditCard.isValid("4723847238643764")).toEqual(false);
    });

    it("should throw exception when number is invalid", function () {
        expect(function () {
            app.creditCard.isValid("ABCDEFG");
        }).toThrow(new Error("Credit card number must be a numeric value"));
    });
})