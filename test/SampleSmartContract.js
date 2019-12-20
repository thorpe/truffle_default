const SampleSmartContract = artifacts.require('SampleSmartContract')

contract('SampleSmartContract', () => {
  it('SampleSmartContract return hello world', async () => {
    const sampleSmartContract = await SampleSmartContract.deployed();
    const result = await sampleSmartContract.hello();
    assert(result === 'Hello World');
  });
});