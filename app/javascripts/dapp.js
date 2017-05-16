import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';
import IPFS from 'ipfs';
import spaceArtifacts from '../../build/contracts/Space.json'

window.addEventListener('load', function () {
  window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

  // get space contract artifacts
  var Space = contract(spaceArtifacts);
  Voting.setProvider(web3.currentProvider);

  Space.deployed()
    // ensure deployment then set resource string on contract
    .then(function (contractInstance) {
      contractInstance.set.call('QmNeudxFK6tgBkLH5muPEbDaw4K9pcbz544GNDRcnbxaJU')
      // let ipfsNode = new IPFS();

    })
  // call set("/ipfs/QmNeudxFK6tgBkLH5muPEbDaw4K9pcbz544GNDRcnbxaJU") on space contract with address hash
  // make new IPFS node? or instantiate object to retrieve file from network
  // display the page
}
)
