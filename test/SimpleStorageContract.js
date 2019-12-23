const SimpleStorageContract = artifacts.require('SimpleStorageContract')

contract('SimpleStorageContract', () => {
  it('---- SimpleStorageContract get() ----', async () => {
    const simpleStorageContract = await SimpleStorageContract.deployed();
    await simpleStorageContract.set('aaa');

    const result = await simpleStorageContract.get();
    assert(result === 'aaa');
  });
});