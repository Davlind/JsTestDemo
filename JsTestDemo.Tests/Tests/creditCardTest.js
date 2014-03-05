/// <chutzpah_reference path="../../JsTestDemo/app/dashboard/creditcard.js" />

describe("Credit card", function () {
    it("is valid when luhn check is ok", function () {
        expect(app.creditCard.isValid("4627383674323742")).toEqual(true);

        expect(app.creditCard.isValid("7238562784627463")).toEqual(true);
    });

    it("is invalid when the luhn check fails", function () {                         expect(app.creditCard.isValid("4723847238643764")).toEqual(false);       });     it("should throw exception when number is invalid", function () {                expect(function() {                                                              app.creditCard.isValid("ABCDEFG");                                       }).toThrow(new Error("Credit card number must be a numeric value"));    });
});