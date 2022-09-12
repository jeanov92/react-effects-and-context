import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const IS_LOGGED_IN = "isLoggedIn";
  const LOGGED_IN = "1";
  console.log("App affected! " + new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=> {
    console.log("Use effect!!! " + new Date());
    if(localStorage.getItem(IS_LOGGED_IN) === LOGGED_IN) {
      setIsLoggedIn(true);
    }
  }, []);


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(IS_LOGGED_IN);
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
