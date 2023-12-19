const should = require("should");
const Tom = require("../main");
describe("Checking if the user is created correctly", function () {
 it("should create the user with the correct name", function () {
 const tom = new Tom();
 tom.name.should.be.equal("tommy"); });
});