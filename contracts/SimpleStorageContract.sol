pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorageContract {
    string public data;

    function set(string memory _data) public {
        data = _data;
    }

    function get() view public returns(string memory) {
        return data;
    }
}