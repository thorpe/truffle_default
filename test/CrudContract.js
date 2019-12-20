const CrudContract = artifacts.require('CrudContract')

contract('CrudContract', () => {
  it('---- CrudContract ----', async () => {
    const crudContract = await CrudContract.deployed();
    await crudContract.create("aaaa");
    const result = await crudContract.read(1);
    assert(result[1] === 'aaaa');
  });

  it('---- CrudContract ----', async () => {
    const crudContract = await CrudContract.deployed();
    await crudContract.update(1, "bbbb");
    const result = await crudContract.read(1);
    assert(result[1] === 'bbbb');
  });

  it('---- CrudContract ----', async () => {
    const crudContract = await CrudContract.deployed();
    await crudContract.destroy(1);
    const result = await crudContract.read(1);
    assert(result[1] === 'bbbb');
  });
});