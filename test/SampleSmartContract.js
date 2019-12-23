const SampleSmartContract = artifacts.require('SampleSmartContract')

contract('SampleSmartContract', () => {
  it('---- SampleSmartContract hello()', async () => {
    const sampleSmartContract = await SampleSmartContract.deployed();
    const result = await sampleSmartContract.hello();
    assert(result === 'Hello World');
  });
});