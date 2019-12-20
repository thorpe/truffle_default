pragma solidity >=0.4.21 <0.7.0;

contract ArrayStorageContract {
    uint[] public ids;

    function add(uint id) public {
        ids.push(id);
    }

    function get(uint i) view public returns (uint) {
        return ids[i];
    }

    function getAll() view public returns (uint[] memory) {
        return ids;
    }

    function length() view public returns (uint) {
        return ids.length;
    }
}