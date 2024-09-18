// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RegisterDisaster {
    address public owner;

    struct Person {
        string idCard;
        string firstName;
        string lastName;
        string addr; // Renamed from 'address' to 'addr'
    }

    mapping(string => Person) private people;

    constructor() {
        owner = msg.sender;
    }

    function registerPerson(string memory _idCard, string memory _firstName, string memory _lastName, string memory _addr) public {
        people[_idCard] = Person(_idCard, _firstName, _lastName, _addr);
    }

    function getID(string memory _idCard) public view returns (Person memory) {
        return people[_idCard];
    }
}
