import EVT from 'evtjs';

// a is a helper function for promises that returns the result in a golang
// type of way. this allows for some golang style explicit error handling
// instead of using catch blocks.
//
// Example:
//
// var {err, response} = await a(somePromise());
// if err != null {
//   ... handle the error ...
// }
function a(promise) {
   return promise.then(data => {
      return {err: null, response: data};
   })
   .catch((err) => {
      return {err: err, response: null}
    });
}

export default class EVTWrapper {
  constructor(params) {
    let {privateKey, host, port, protocol} = params;
    if (privateKey) { this.publicKey = EVT.EvtKey.privateToPublic(privateKey); }
    if (!host) { host = '0.0.0.0'; }
    if (!port) { port = 8888; }
    if (!protocol) { protocol = 'http'; }

    let network = { host, port, protocol };

    this.apiCaller = EVT({
      // keyProvider should be string of private key (aka. wit, can generate from everiSigner)
      // you can also pass a function that return that string (or even Promise<string> for a async function)
      endpoint: network,
      keyProvider: privateKey,
      networkTimeout: 10000,
    });
  }

  getToken = async (domain, name) => {
    var {err, response} = await a(this.apiCaller.getToken(domain, name));
    if (err !== null) {
      if (err.isServerError) { //
        err = err.serverError;
      }
    }
    return {err, response};
  }

  // addMeta tries to add metadata to a token.
  addMeta = async (domain, name, key, value) => {
    var {err, response} = await a(this.apiCaller.pushTransaction(
      new EVT.EvtAction("addmeta", {
          "key": key,
          "value": value,
          "creator": "[A] " + this.publicKey,
      }, domain, name)
    ));
    if (err !== null) {
      console.error(err);
      if (err.isServerError) { //
        err = err.serverError;
      }
    }
    return {err, response};
  }

  randomPrivateKey = async () => {
    let key = await EVT.EvtKey.randomPrivateKey();
    return key;
  }
}
