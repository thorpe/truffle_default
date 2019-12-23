const ArrayStorageContract = artifacts.require('ArrayStorageContract')

contract('ArrayStorageContract', () => {

  it('---- SimpleStorageContract add() ----', async () => {
    const arrayStorageContract = await ArrayStorageContract.deployed();
    await arrayStorageContract.add(10);
    const result = await arrayStorageContract.ids(0);

    assert(result.toNumber() === 10);
  });


  it('---- SimpleStorageContract get() ----', async () => {
    const arrayStorageContract = await ArrayStorageContract.deployed();
    await arrayStorageContract.add(20);
    const result = await arrayStorageContract.get(1);

    assert(result.toNumber() === 20);
  });

  it('---- SimpleStorageContract getAll() ----', async () => {
    const arrayStorageContract = await ArrayStorageContract.deployed();
    await arrayStorageContract.add(30);
    const arrayIds = await arrayStorageContract.getAll();

    const ids = arrayIds.map(id => id.toNumber() )

    assert.deepEqual(ids, [10,20,30])
  });

  it('---- SimpleStorageContract length() ----', async () => {
    const arrayStorageContract = await ArrayStorageContract.deployed();
    const length = await arrayStorageContract.length();
    assert(length.toNumber() === 3);
  });
});