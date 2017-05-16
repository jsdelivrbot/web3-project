var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Voting = artifacts.require("./Voting.sol");
var Space = artifacts.require("./Space.sol");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  // deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'], {gas: 290000});
  // deploy space contract with address to document
  deployer.deploy(Space);
  // QmNeudxFK6tgBkLH5muPEbDaw4K9pcbz544GNDRcnbxaJU is Outer Space
};
