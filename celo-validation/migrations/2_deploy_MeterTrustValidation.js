var HelloWorld = artifacts.require("MeterTrustValidation");

module.exports = function (deployer) {
  deployer.deploy(MeterTrustValidation);
};