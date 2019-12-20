const SimpleStorageContract = artifacts.require("SimpleStorageContract");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorageContract);
};
