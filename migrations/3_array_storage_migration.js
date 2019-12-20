const ArrayStorageContract = artifacts.require("ArrayStorageContract");

module.exports = function(deployer) {
  deployer.deploy(ArrayStorageContract);
};
