pragma solidity >=0.4.21 <0.7.0;

contract CrudContract {

    struct User {
        uint id;
        string name;
    }

    User[] public users;
    uint public nextId = 1;

    function create(string memory name) public {
        users.push(User(nextId, name));
        nextId++;
    }

    function read(uint id) public view returns (uint, string memory) {
        uint i = find(id);
        return (users[i].id, users[i].name);
    }

    function update(uint id, string memory name) public {
        uint i = find(id);
        users[i].name = name;
    }

    function destroy(uint id) public {
        uint i = find(id);
        delete users[i];
    }

    function find(uint id) internal view  returns (uint) {
        for (uint i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return i;
            }
        }
        revert('dfsf');
    }
}