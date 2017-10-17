var contract = require('truffle-contract')
var EventEmitterContract = require('../blockchain/build/contracts/EventEmitter.json')
var Web3 = require('web3')

var EventEmitter = contract(EventEmitterContract)

window.onload = function () {
  if (window.web3) {
    var web3 = new Web3(window.web3.currentProvider)
    main(web3)
  } else {
    alert('web3 not found')
  }
}

function main(web3) {
  EventEmitter.setProvider(web3.currentProvider)

  var emitButton = document.querySelector('#emit')
  var emittedList = document.querySelector('#emitted-list')

  emitButton.onclick = function () {
    EventEmitter.deployed().then(eventEmitter => {
      web3.eth.getAccounts()
        .then((accounts) => {
          eventEmitter.emit({
            from: accounts[0]
          })
        })
    })
  }

  var i = 1;
  EventEmitter.deployed().then((eventEmitter) => {
    eventEmitter.EventEmitted().watch(function () {
      var li = document.createElement('li')
      li.innerText = i
      i++
      emittedList.appendChild(li)
    })
  });
}
