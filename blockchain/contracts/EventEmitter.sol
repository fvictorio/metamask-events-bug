pragma solidity ^0.4.4;

contract EventEmitter {
  event EventEmitted();

  function emit() {
    EventEmitted();
  }
}
