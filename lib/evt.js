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
    let {publicKey, privateKey} = params;

    let network = {
      host: '127.0.0.1',
      port: 8888,
      protocol: 'http'
    };

    this.apiCaller = EVT({
      // keyProvider should be string of private key (aka. wit, can generate from everiSigner)
      // you can also pass a function that return that string (or even Promise<string> for a async function)
      endpoint: network,
      keyProvider: privateKey,
      networkTimeout: 10000,
    });
  }


  getInfo = async () => {
    console.log("getting info...")
    var {err, response} = await a(this.apiCaller.getInfo());
    if (err != null) {
      console.log("Unable to getInfo:")
      console.error(err)
      return;
    }
    console.log("getInfo response:", response);
    console.log("");
  }

  getToken = async (domain, name) => {
    console.log("getting token.")
    var {err, response} = await a(this.apiCaller.getToken(domain, name));
    if (err != null) {
      console.error(err);
      if (err.isServerError) { //
        err = err.serverError;
      }
    }
    return {err, response};
  }
}
