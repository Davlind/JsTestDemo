/// <chutzpah_reference path="../../JsTestDemo/app/dashboard/creditcard.js" />

describe("Credit card", function () {
    it("is valid when luhn check is ok", function() {
        expect(app.creditCard.isValid("4627383674323741")).toEqual(true);
        expect(app.creditCard.isValid("7238562784627463")).toEqual(true);
    });

    it("is invalid when luhn check fails", function() {
        expect(app.creditCard.isValid("4723847238643764")).toEqual(false);
    });

    it("validation should throw exception if non numeric", function() {
        expect(function() {
            app.creditCard.isValid("ABCDEF");
        }).toThrow(new Error("Credit card number must be a numeric value"));
    });
});