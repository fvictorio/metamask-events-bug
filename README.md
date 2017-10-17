# Instructions

First, check that everything works in Rinkeby:

1. Enter the `blockchain` directory and run `truffle compile`
1. With a node connected to Rinkeby, run `truffle migrate`
1. Enter the `web` directory and run `npm install`
1. Build the files using `npm run build`
1. Start a local server (e.g. `python -m SimpleHTTPServer 3000`)
1. Open the page with MetaMask connected to Rinkeby and click the button. When the transaction is
processed, a new list item should appear.

Now perform similar steps in `testrpc`:

1. Run `testrpc`
1. Go to the `blockchain` directory and run `truffle migrate`
1. Go to the `web` directory and run `npm run build` (this is necessary to get the address of the
contract in testrpc)
1. Connect MetaMask to testrpc and reload the page. Click the button. The list item should appear,
but it doesn't.
