const SampleSmartContract = artifacts.require("SampleSmartContract");

module.exports = function(deployer) {
  deployer.deploy(SampleSmartContract);
};
