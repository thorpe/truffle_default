const CrudContract = artifacts.require('CrudContract')

contract('CrudContract', () => {
  it('---- CrudContract create() ----', async () => {
    const crudContract = await CrudContract.deployed();
    await crudContract.create("aaaa");
    await crudContract.create("bbbb");
    await crudContract.create("cccc");
    const result = await crudContract.read(1);
    assert(result[1] === 'aaaa');
  });

  it('---- CrudContract update() ----', async () => {
    const crudContract = await CrudContract.deployed();
    await crudContract.update(1, "aaaa-bbbb");
    const result = await crudContract.read(1);
    assert(result[1] === 'aaaa-bbbb');
  });

  it('---- CrudContract read() ----', async () => {
    const crudContract = await CrudContract.deployed();
    await crudContract.destroy(1);
    const result = await crudContract.read(2);
    assert(result[1] === 'bbbb');
  });
});