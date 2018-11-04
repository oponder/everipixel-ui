import { useState, useEffect } from 'react';

export default function Header(props) {
  let [privateKey, setPrivateKey] = useState("");
  let [createAccountToggle, setCreateAccountToggle] = useState(false);
  let [createAccountPage, setCreateAccountPage] = useState(0);
  let [loginToggle, setLoginToggle] = useState(false);

  function toggleCreateAccount() {
    setLoginToggle(false);
    setCreateAccountPage(0);
    setCreateAccountToggle(!createAccountToggle);
  }

  function toggleLogin() {
    setCreateAccountToggle(false);
    setLoginToggle(!loginToggle);
  }

  function advanceCreateAccount() {
    (async () => {
      let privateKey = await props.EVTWrapper.randomPrivateKey();
      props.onLogin(privateKey);
      setCreateAccountPage(2);
    })();

    setCreateAccountPage(1);
  }

  function showCreateAccountPage() {
    if (createAccountPage === 0) {
      return <div>
        <h3>Create Account  <a onClick={toggleCreateAccount} className="pullRight close">[X]</a></h3>
        <p>There is actually no such thing as creating an account! That's the beauty
        of the blockchain. All you need is a private key. And the servers will never
        see that private key.</p>

        <p>Now, normally there is a wallet app that keeps these keys safe for you.
        However, I've had some trouble integrating
        Everitoken's app (called everiSigner). So for now, private key creation
        is done by everiPixel itself.</p>

        <p>While everiPixel is a prototype, this should be ok. But I do intend to use
        something like everiSigner eventually to give you more confidence that your
        private key is safe.</p>

        <button className="primary" onClick={advanceCreateAccount}>Continue and make me a private key!</button>
      </div>
    } else if (createAccountPage === 1){
      return <div>
        <h3>Creating Private Key</h3>
        <p>Please wait a moment</p>
      </div>
    } else if (createAccountPage === 2) {
      return <div>
        <h3>Private Key Created! <a onClick={toggleCreateAccount} className="pullRight close">[X]</a></h3>
        <p>You are now logged in.</p>
        <p>Copy your private key.</p>
        <p>Set an identity</p>
        <p>Close this window</p>
      </div>
    }
  }

  function handlePrivateKeyChange(e) {
    setPrivateKey(e.target.value);
  }

  function commitPrivateKey(e) {
    e.preventDefault();
    setLoginToggle(false);
    props.onLogin(privateKey);
  }

  function logout() {
    setPrivateKey("");
    var c = confirm("Are you sure you want to logout? Make sure you saved your private key somewhere, there's no way to recover it.")
    if (c) {
      props.onLogout();
    }
  }

  return <div className="header">
    <h1>everi<span>Pixel</span></h1>

    <div className="user pullRight">


      {
        props.loggedIn ?
        <div>Logged in as: {props.loggedIn} | <a onClick={logout}>Logout</a></div>
        :
        <div><a onClick={toggleLogin}>Login</a> | <a onClick={toggleCreateAccount}>Create Account</a></div>
      }

      {
        loginToggle ?
          <div className="createAccount overlayWindow">
            <h3>Login <a onClick={toggleLogin} className="pullRight close">[X]</a></h3>
            <label>Private Key</label>
            <form>
              <input autoFocus type="text" value={privateKey} onChange={handlePrivateKeyChange}/>
              <button className="primary" onClick={commitPrivateKey}>Save</button>
            </form>
          </div>
        :
          undefined
      }

      {
        createAccountToggle ?
          <div className="createAccount overlayWindow">
            {
              showCreateAccountPage(createAccountPage)
            }
          </div>
        :
          undefined
      }
    </div>

    <style jsx>
      {`
        h1 {
          color: #858585;
          font-size: 24px;
          margin: 0;
          display: inline;
        }

        h1 span {
          color: #fff
        }
      `}
    </style>
  </div>
}
